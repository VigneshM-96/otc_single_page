import Image from "next/image";

const footerLinks = [
  {
    title: "Our Products",
    links: [
      {
        label: "TradeIQ",
        href: "https://www.tradeiq.exchange/",
      },
      {
        label: "Spot Trading",
        href: "https://www.uniticexchange.com/spot-usdt/BTC-USDT",
      },
      {
        label: "Futures Trading",
        href: "https://www.uniticexchange.com/futures/trade/BTCUSDT",
      },
    ],
  },
  {
    title: "Business",
    links: [
      {
        label: "OTC Desk",
        href: "https://www.uniticexchange.com/usdt-otc-desk",
      },
      {
        label: "API Service",
        href: "https://www.uniticexchange.com/api-docs#get_ticker",
      },
      {
        label: "Academy",
        href: "https://www.uniticexchange.com/learn-crypto",
      },
    ],
  },
  {
    title: "Corporate",
    links: [
      {
        label: "Terms of Use",
        href: "https://www.uniticexchange.com/assets/Unitic_Exchange_Terms_Of_Use.pdf",
      },
      {
        label: "Privacy Policy",
        href: "https://www.uniticexchange.com/assets/Unitic_Exchange_Privacy_Policy.pdf",
      },
      {
        label: "About Us",
        href: "https://www.uniticexchange.com/about",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* =========================
            TOP FOOTER
        ========================== */}

        <div className="footer-main">

          {/* LEFT */}
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
              Unitic Exchange offers USDT OTC Desk services in India
              for large-volume transactions, competitive pricing,
              and streamlined settlement.
            </p>

          </div>


          {/* RIGHT */}
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
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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


        {/* =========================
            DIVIDER
        ========================== */}

        <div className="footer-divider" />


        {/* =========================
            ADDRESS + SOCIAL
        ========================== */}

        <div className="footer-bottom-info">

          {/* ADDRESS */}
          <div className="footer-address">

            <h2>Contact us</h2>

            <p>
              supports@uniticexchange.com
            </p>

          </div>


          {/* FOLLOW US */}
          <div className="footer-social">

            <h2>Follow Us</h2>

            <div className="footer-social-links">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/uniticexchange/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="icon-fill"
                  />
                </svg>
              </a>


              {/* Telegram */}
              <a
                href="https://t.me/uniticexchange"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M21.5 3.5 18.2 20c-.25 1.15-.9 1.43-1.83.9l-5.08-3.75-2.45 2.36c-.27.27-.5.5-1.02.5l.36-5.18 9.43-8.52c.41-.36-.09-.56-.64-.2L5.3 13.2.28 11.63c-1.09-.34-1.11-1.09.23-1.59L20.1 2.62c.91-.34 1.71.2 1.4.88Z" />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/unitic-exchange/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 5 3.5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.59c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95V21H9V9Z" />
                </svg>
              </a>


              {/* YouTube */}
              <a
                href="https://www.youtube.com/@UniticExchange2025"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
                </svg>
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}