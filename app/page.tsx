import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StatsCounter from "./components/StatsCounter";
import PlatformShowcase from "./components/PlatformShowcase";
import FAQ from "./components/FAQ";

export default function Main() {
  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            SECTION 1 — LANDING
            ===================================================== */}

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-container">

            {/* LEFT SIDE */}
            <div className="hero-content">

              <h1 id="hero-title">
  Trade <span className="hero-highlight">USDT</span>
  <br />
  With Confidence
</h1>

              <p className="hero-description">
                Experience a simple and efficient way to trade USDT
                through a reliable OTC trading infrastructure built
                for seamless transactions.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="hero-visual">

              <div className="hero-image-wrapper">
                <img
                  src="/landing_img.png"
                  alt="USDT trading interface"
                  className="hero-image"
                />
              </div>

              <div className="hero-actions">
                <a
                  href="https://www.uniticexchange.com/"
                  className="hero-button hero-button-primary"
                >
                  Start Trade
                </a>

                <a
                  href="#contact"
                  className="hero-button hero-button-secondary"
                >
                  Contact Us
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
    SECTION 2 — WHAT IS USDT OTC
    ===================================================== */}

<section
  id="what-is-usdt-otc"
  className="usdt-otc-section"
  aria-labelledby="usdt-otc-title"
>
  <div className="usdt-otc-container">

    {/* TOP CONTENT */}
    <div className="usdt-otc-main">

      {/* LEFT — CONTENT */}
      <div className="usdt-otc-content">
        <span className="section-eyebrow">
          WHAT IS USDT OTC
        </span>

        <p>
          USDT OTC enables buyers and sellers to trade directly
          without the complexity of traditional exchanges. It
          provides a straightforward way to access USDT with
          efficient transactions and a smoother trading experience.
        </p>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="usdt-otc-visual">
        <img
          src="/what_is_otc_img.jpg"
          alt="USDT OTC trading interface"
          className="usdt-otc-image"
        />
      </div>

    </div>

    {/* BOTTOM — GLASS TAGS */}
    <div className="usdt-otc-tags">

      <div className="usdt-otc-tag">
        <div className="usdt-otc-tag-icon">↗</div>

        <div>
          <h3>Direct Transactions</h3>
          <p>
            Buy and sell USDT directly with trusted counterparties.
          </p>
        </div>
      </div>

      <div className="usdt-otc-tag">
        <div className="usdt-otc-tag-icon">◇</div>

        <div>
          <h3>Enhanced Security</h3>
          <p>
            Trade with confidence through secure processes.
          </p>
        </div>
      </div>

      <div className="usdt-otc-tag">
        <div className="usdt-otc-tag-icon">◷</div>

        <div>
          <h3>Faster Settlements</h3>
          <p>
            Complete transactions with minimal waiting time.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

        {/* =====================================================
    SECTION 3 — WHY CHOOSE USDT OTC
    ===================================================== */}

<section
  id="why-choose"
  className="why-choose-section"
  aria-labelledby="why-choose-title"
>
  <div className="why-choose-container">

    {/* SECTION HEADING */}
    <div className="why-choose-heading">
      <span className="section-eyebrow">
        WHY CHOOSE USDT OTC
      </span>

      <h2 id="why-choose-title">
        Trade Smarter with
        <br />
        <span>USDT OTC</span>
      </h2>

      <p>
        Experience a simple, secure and efficient way to trade USDT
        with better flexibility, reliable transactions and smooth
        settlements.
      </p>
    </div>

    {/* THREE COLUMNS */}
    <div className="why-choose-layout">

      {/* LEFT CARDS */}
      <div className="why-choose-column why-choose-left">

        <article className="why-choose-card">
          <div className="why-choose-icon">◈</div>
          <div>
            <h3>Trusted Counterparties</h3>
            <p>
              Trade directly with verified and reliable partners
              for a more transparent experience.
            </p>
          </div>
        </article>

        <article className="why-choose-card">
          <div className="why-choose-icon">%</div>
          <div>
            <h3>Competitive Rates</h3>
            <p>
              Access competitive pricing and efficient spreads
              for your USDT transactions.
            </p>
          </div>
        </article>

        <article className="why-choose-card">
          <div className="why-choose-icon">↯</div>
          <div>
            <h3>Flexible Trading Options</h3>
            <p>
              Choose trading amounts and transaction options
              that fit your requirements.
            </p>
          </div>
        </article>

      </div>

      {/* CENTER IMAGE */}
      <div className="why-choose-visual">
        <div className="why-choose-image-glow" />

        <img
          src="/why_choose.png"
          alt="USDT OTC trading"
          className="why-choose-image"
        />
      </div>

      {/* RIGHT CARDS */}
      <div className="why-choose-column why-choose-right">

        <article className="why-choose-card">
          <div className="why-choose-icon">⌕</div>
          <div>
            <h3>Enhanced Security</h3>
            <p>
              Secure transaction processes help protect your
              trading activity and information.
            </p>
          </div>
        </article>

        <article className="why-choose-card">
          <div className="why-choose-icon">◷</div>
          <div>
            <h3>Fast Settlements</h3>
            <p>
              Complete transactions efficiently with minimal
              waiting time.
            </p>
          </div>
        </article>

        <article className="why-choose-card">
          <div className="why-choose-icon">◉</div>
          <div>
            <h3>Dedicated Support</h3>
            <p>
              Get assistance throughout your trading journey
              whenever you need it.
            </p>
          </div>
        </article>

      </div>

    </div>

  </div>
</section>

        {/* =====================================================
    SECTION 4 — TRADE THROUGH UNITIC
    ===================================================== */}

<section
  id="trade-through-unitic"
  className="trade-unitic-section"
  aria-labelledby="trade-unitic-title"
>
  <div className="trade-unitic-container">

    {/* LEFT — IMAGE */}
    <div className="trade-unitic-visual">
      <img
        src="/trade_unitic.png"
        alt="Trading USDT through Unitic"
        className="trade-unitic-image"
      />
    </div>

    {/* RIGHT — CONTENT */}
    <div className="trade-unitic-content">

      <span className="section-eyebrow">
        TRADE THROUGH UNITIC
      </span>

      <h2 id="trade-unitic-title">
        A simpler way to
        <br />
        trade <span>USDT.</span>
      </h2>

      <p>
        Trade USDT through Unitic with a straightforward OTC
        experience designed to make every transaction simple,
        efficient and reliable. Connect with trusted
        counterparties, choose the transaction that suits your
        requirements and complete your trade with a smooth
        settlement process.
      </p>

    </div>

  </div>
</section>

        {/* =====================================================
    SECTION 5 — OUR STATS
    ===================================================== */}

<section
  id="stats"
  className="stats-section"
  aria-labelledby="stats-title"
>
  <div className="stats-container">

    {/* HEADING */}
    <div className="stats-heading">

      <span className="section-eyebrow">
        OUR STATS
      </span>

      <h2 id="stats-title">
        Numbers That Reflect
        <br />
        Our <span>Trading</span> Activity
      </h2>

      <p>
        Built around efficient transactions, reliable execution
        and a straightforward OTC trading experience.
      </p>

    </div>

    {/* STATS GLASS CARD */}
    <div className="stats-card">

      <div className="stat-item">
        <div className="stat-number">
          <StatsCounter value={10000} suffix="+" />
        </div>

        <h3>Transactions</h3>

        <p>
          Successfully processed transactions
          through our platform.
        </p>
      </div>

      <div className="stat-item">
        <div className="stat-number">
          <StatsCounter value={50} suffix="M+" />
        </div>

        <h3>Trading Volume</h3>

        <p>
          Total USDT trading volume processed
          through the platform.
        </p>
      </div>

      <div className="stat-item">
        <div className="stat-number">
          <StatsCounter value={99} suffix="%" />
        </div>

        <h3>Successful Trades</h3>

        <p>
          Efficiently completed transactions
          across our trading activity.
        </p>
      </div>

      <div className="stat-item">
        <div className="stat-number">
          <StatsCounter value={24} suffix="/7" />
        </div>

        <h3>Availability</h3>

        <p>
          Platform availability designed to
          support your trading needs.
        </p>
      </div>

    </div>

  </div>
</section>
        
        {/* =====================================================
    SECTION 6 — USDT POWERED PROJECTS
    ===================================================== */}

<section
  id="projects"
  className="projects-section"
  aria-labelledby="projects-title"
>
  <div className="projects-container">

    {/* HEADING */}
    <div className="projects-heading">
      <span className="section-eyebrow">
        USDT POWERED PROJECTS
      </span>

      <h2 id="projects-title">
        Built for Projects
        <br />
        Powered by <span>USDT</span>
      </h2>

      <p>
        Explore how USDT OTC infrastructure can support different
        business models, payment requirements and digital
        transactions with greater flexibility and efficiency.
      </p>
    </div>

    {/* PROJECT CARDS */}
    <div className="projects-grid">

      <article className="project-card">
        <span className="project-card-number">01</span>

        <h3>Digital Payments</h3>

        <p>
          Enable seamless USDT-based payments for digital
          businesses and online transactions.
        </p>
      </article>

      <article className="project-card">
        <span className="project-card-number">02</span>

        <h3>Global Transactions</h3>

        <p>
          Simplify cross-border transactions with efficient
          USDT settlement infrastructure.
        </p>
      </article>

      <article className="project-card">
        <span className="project-card-number">03</span>

        <h3>Trading Platforms</h3>

        <p>
          Support trading platforms with reliable OTC liquidity
          and efficient USDT transactions.
        </p>
      </article>

      <article className="project-card">
        <span className="project-card-number">04</span>

        <h3>Business Settlements</h3>

        <p>
          Provide businesses with flexible solutions for
          recurring USDT settlement requirements.
        </p>
      </article>

      <article className="project-card">
        <span className="project-card-number">05</span>

        <h3>Web3 Ecosystems</h3>

        <p>
          Connect Web3 projects with practical USDT transaction
          and liquidity solutions.
        </p>
      </article>

      <article className="project-card">
        <span className="project-card-number">06</span>

        <h3>Custom Solutions</h3>

        <p>
          Build tailored OTC workflows around specific business
          and transaction requirements.
        </p>
      </article>

    </div>

  </div>
</section>

        {/* Section 7 - Reliable Platforms For Trading */}
        <PlatformShowcase />

        {/* SECTION 8 — CTA */}
<section
  id="contact"
  className="cta-section"
  aria-labelledby="cta-title"
>
  <div className="cta-container">
    <div className="cta-card">

      <div className="cta-glow" />

      <div className="cta-content">
        <span className="section-eyebrow">
          CONNECT WITH UNITIC
        </span>

        <h2 id="cta-title">
          Ready to Trade
          <br />
          <span>USDT OTC?</span>
        </h2>

        <p>
          Connect with Unitic and explore our USDT OTC desk for
          a simple, reliable and efficient trading experience.
        </p>

        <a
          href="https://www.uniticexchange.com/usdt-otc-desk"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Connect With Us
          <span aria-hidden="true">↗</span>
        </a>
      </div>

    </div>
  </div>
</section>

  <FAQ />

        {/* SECTION 10 — DISCLAIMER */}
<section
  id="disclaimer"
  className="disclaimer-section"
  aria-labelledby="disclaimer-title"
>
  <div className="disclaimer-container">
    <div className="disclaimer-card">

      <div className="disclaimer-icon" aria-hidden="true">
        !
      </div>

      <div className="disclaimer-content">
        <span className="section-eyebrow">
          IMPORTANT INFORMATION
        </span>

        <h2 id="disclaimer-title">
          Disclaimer
        </h2>

        <p>
          The information provided on this website is for general
          informational purposes only and should not be considered
          financial, investment, legal or professional advice.
          Cryptocurrency and USDT transactions involve risks, and
          users should conduct their own research and consider
          their individual circumstances before entering into any
          transaction.
        </p>

        <p>
          Unitic does not guarantee profits, returns or the
          performance of any digital asset or transaction. Users
          are responsible for understanding the applicable risks,
          regulations and requirements associated with their
          activities.
        </p>
      </div>

    </div>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}