"use client";

import Image from "next/image";
import { useState } from "react";

const platforms = {
  mobile: {
    src: "/mobile_view.png",
    alt: "Unitic mobile trading platform",
  },
  desktop: {
    src: "/desktop_view.png",
    alt: "Unitic desktop trading platform",
  },
};

const features = [
  {
    number: "01",
    title: "Secure Trading",
    description:
      "Built with reliable infrastructure to keep your trading activity secure and protected.",
  },
  {
    number: "02",
    title: "Fast Execution",
    description:
      "Experience smooth transactions with efficient execution and minimal delays.",
  },
  {
    number: "03",
    title: "Any Device",
    description:
      "Access your trading experience across mobile and desktop whenever you need it.",
  },
];

export default function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <section
      id="platforms"
      className="platforms-section"
      aria-labelledby="platforms-title"
    >
      <div className="platforms-container">

        <div className="platforms-content">

          <h2 id="main-title">
            Trade with
            <br />
            <span>Confidence.</span>
          </h2>

          <p className="platforms-description">
            Access a reliable trading experience designed for speed,
            security and flexibility. Whether you trade from your
            mobile device or desktop, Unitic keeps your USDT trading
            experience simple and efficient.
          </p>

          <div className="platforms-features">
            {features.map((feature) => (
              <article
                className="platform-feature-card"
                key={feature.number}
              >
                <div className="platform-feature-number">
                  {feature.number}
                </div>

                <div className="platform-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

                <span className="platform-feature-arrow">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="platforms-visual">
          <div className="platform-image-wrapper">

            <Image
              src={platforms[activeTab].src}
              alt={platforms[activeTab].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="platform-image"
            />

            <div className="platform-tabs">
              <button
                type="button"
                className={`platform-tab ${
                  activeTab === "mobile" ? "active" : ""
                }`}
                onClick={() => setActiveTab("mobile")}
                aria-pressed={activeTab === "mobile"}
              >
                <span className="platform-tab-icon">▯</span>
                Mobile
              </button>

              <button
                type="button"
                className={`platform-tab ${
                  activeTab === "desktop" ? "active" : ""
                }`}
                onClick={() => setActiveTab("desktop")}
                aria-pressed={activeTab === "desktop"}
              >
                <span className="platform-tab-icon">▭</span>
                Desktop
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}