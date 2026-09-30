import Image from "next/image";

const footerLinks = [
  {
    title: "Explore",
    links: [
      {
        label: "USDT OTC",
        href: "#what-is-usdt-otc",
      },
      {
        label: "Why Unitic",
        href: "#why-choose",
      },
      {
        label: "How It Works",
        href: "#trade-through-unitic",
      },
    ],
  },
  {
    title: "Platform",
    links: [
      {
        label: "Stats",
        href: "#stats",
      },
      {
        label: "Projects",
        href: "#projects",
      },
      {
        label: "Platforms",
        href: "#platforms",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Contact Us",
        href: "#contact",
      },
      {
        label: "Disclaimer",
        href: "#disclaimer",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* LEFT SIDE */}
          <div className="footer-left">

            <a
              href="/"
              className="footer-logo"
              aria-label="Unitic home"
            >
              <Image
                src="/logo.png"
                alt="Unitic"
                width={150}
                height={45}
                className="footer-logo-image"
              />
            </a>

            <p className="footer-description">
              USDT OTC trading infrastructure designed for a
              straightforward and efficient trading experience.
            </p>

            {/* Address */}
            <div className="footer-address">
              <h2>Address</h2>

              <p>
                Your address goes here
              </p>
            </div>

            {/* Social Media */}
            <div className="footer-social">
              <h2>Follow Us</h2>

              <div className="footer-social-links">
                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  aria-label="X"
                >
                  X
                </a>
              </div>
            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="footer-right">

            <div className="footer-links">
              {footerLinks.map((group) => (
                <div
                  className="footer-link-group"
                  key={group.title}
                >
                  <h2>{group.title}</h2>

                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Unitic.
            All rights reserved.
          </p>

          <a href="#disclaimer">
            Disclaimer
          </a>

        </div>

      </div>
    </footer>
  );
}