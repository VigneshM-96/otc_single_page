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
          

            

            <div className="footer-social-links">

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
  
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "38px 38px 38px 38px",
    columnGap: "28px",
    rowGap: "12px",
    width: "fit-content",
  }}
>

  <>
  {/* X */}
  <a
    href="https://x.com/unitic_exchange"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    style={{
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      textDecoration: "none",
    }}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "38px",
        height: "38px",
        display: "block",
      }}
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="#FFFFFF"
      />
    </svg>
  </a>

  {/* Telegram */}
  <a
    href="https://t.me/uniticexchange"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Telegram"
    style={{
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      textDecoration: "none",
    }}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "38px",
        height: "38px",
        display: "block",
      }}
    >
      <path
        d="M11.2 14.86l-.39 5.62c.56 0 .81-.26 1.11-.54l2.66-2.56 5.51 4.07c1.01.56 1.72.27 1.99-.98l3.6-16.98c.37-1.49-.57-2.17-1.54-1.72L2.28 9.83c-1.44.57-1.42 1.39-.25 1.76l5.45 1.7 12.65-7.97c.59-.4 1.14-.18.69.21z"
        fill="#229ED9"
      />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/uniticexchange/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    style={{
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      textDecoration: "none",
    }}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "38px",
        height: "38px",
        display: "block",
      }}
    >
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0 3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        fill="#D62976"
      />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@UniticExchange2025"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    style={{
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      textDecoration: "none",
    }}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "38px",
        height: "38px",
        display: "block",
      }}
    >
      <path
        d="M12 7.5c-3.5 0-5.5.2-5.5.2s-.6.1-.9.4c-.4.4-.5.9-.5.9s-.2 1-.2 2v2s0 1 .2 2c0 0 .1.5.5.9.3.3.9.4.9.4s2 .2 5.5.2 5.5-.2 5.5-.2.6-.1.9-.4c.4-.4.5-.9.5-.9s.2-1.2.2-2v-2s0-1-.2-2c0 0-.1-.5-.5-.9-.3-.3-.9-.4-.9-.4s-2-.2-5.5-.2zm-1.5 6.5V10l3 2-3 2z"
        fill="#FF0000"
      />
    </svg>
  </a>

  {/* Discord */}
  <a
    href="https://discord.com/invite/pMEsMXMgDR"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Discord"
    style={{
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      textDecoration: "none",
    }}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "38px",
        height: "38px",
        display: "block",
      }}
    >
      <path
        d="M19.27 4.73a16.2 16.2 0 00-4-1.25l-.2.39a15 15 0 00-1.8.02 17.5 17.5 0 00-2.54 0 13.9 13.9 0 00-1.79-.02l-.2-.39a16.2 16.2 0 00-4 1.25A17.22 17.22 0 002.3 17.55a16.5 16.5 0 004.95 2.51l1-.1.4-.6a11.16 11.16 0 01-1.6-.77c.13-.1.27-.19.4-.29a11.8 11.8 0 009.1 0c.13.1.27.2.4.29a11.22 11.22 0 01-1.6.77l.4.6 1 .1a16.48 16.48 0 004.95-2.51 17.25 17.25 0 00-2.43-12.82zM9.57 14.61c-.96 0-1.74-.88-1.74-1.96s.76-1.96 1.74-1.96 1.74.88 1.74 1.96-.76 1.96-1.74 1.96zm4.86 0c-.96 0-1.74-.88-1.74-1.96s.76-1.96 1.74-1.96 1.74.88 1.74 1.96-.76 1.96-1.74 1.96z"
        fill="#5865F2"
      />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/unitic-exchange/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    style={{
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      textDecoration: "none",
    }}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "38px",
        height: "38px",
        display: "block",
      }}
    >
      <path
        d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"
        fill="#2867B2"
      />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/uniticexchange"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    style={{
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      textDecoration: "none",
    }}
  >
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "38px",
        height: "38px",
        display: "block",
      }}
    >
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill="#4267B2"
      />
    </svg>
  </a>
</>


</div>

            </div>

          </div>

        </div>


    </footer>
  );
}