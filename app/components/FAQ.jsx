"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is USDT OTC trading?",
    answer:
      "USDT OTC trading allows buyers and sellers to complete USDT transactions directly through an OTC desk, providing a more flexible way to handle larger or specific trading requirements.",
  },
  {
    question: "How does Unitic USDT OTC work?",
    answer:
      "Unitic connects you with its USDT OTC trading service, where you can discuss your transaction requirements, confirm the trade details and proceed with the settlement process.",
  },
  {
    question: "Why use an OTC desk instead of a regular exchange?",
    answer:
      "OTC trading can provide a more direct transaction experience and may be suitable for users looking for flexible transaction arrangements, particularly for larger USDT trades.",
  },
  {
    question: "Is USDT OTC trading secure?",
    answer:
      "Unitic is designed to provide a structured and reliable OTC trading experience. Users should always verify transaction details and follow the security procedures provided by the trading desk.",
  },
  {
    question: "Can I access the trading platform from mobile and desktop?",
    answer:
      "Yes. The trading experience can be accessed across supported mobile and desktop platforms, allowing users to manage their trading requirements from different devices.",
  },
  {
    question: "How can I connect with Unitic for USDT OTC trading?",
    answer:
      "You can connect with Unitic through the USDT OTC desk to discuss your requirements and start the trading process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="faq-section"
      aria-labelledby="faq-title"
    >
      <div className="faq-container">

        <div className="faq-heading">
          <span className="section-eyebrow">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 id="faq-title">
            Everything You Need
            <br />
            to Know About <span>USDT OTC</span>
          </h2>

          <p>
            Find answers to common questions about USDT OTC trading,
            Unitic and the trading experience.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {faq.question}
                  </span>

                  <span
                    className="faq-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-wrapper"
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}