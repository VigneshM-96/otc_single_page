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

        <section
          className="hero-section"
          aria-labelledby="hero-title"
        >
          <div className="hero-container">

            {/* LEFT SIDE */}
            <div className="hero-content">

              <h1 id="hero-title">
                USDT OTC Desk in{" "}
                <span className="hero-highlight">India</span>
                <br />
                for Large-Volume Trades
              </h1>

              <p className="hero-description">
                Buy and sell USDT in India through Unitic's OTC desk.
                Get competitive INR pricing, verified counterparties
                and fast settlements for large-volume trades, without
                the slippage of a regular exchange order book.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="hero-visual">

              <div className="hero-image-wrapper">

                <div className="why-choose-image-glow" />

                <img
                  src="/landing_img.png"
                  alt="USDT OTC trading interface"
                  className="hero-image"
                />
              </div>

              <div className="hero-actions">

                <a
                  href="https://www.uniticexchange.com/usdt-otc-desk"
                  className="hero-button hero-button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Trade
                </a>

                <a
                  href="https://www.uniticexchange.com/help-center"
                  className="hero-button hero-button-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
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


                <h2 id="main-title">
                  Buy and Sell USDT Through a Structured OTC Desk
                </h2>

                <p>
                  USDT OTC (over-the-counter) trading lets you buy or
                  sell large amounts of USDT directly with a counterparty
                  instead of through a public exchange order book. In
                  India, this is popular with businesses, traders and
                  high-volume investors who want price certainty, privacy
                  and smooth INR settlement.
                </p>

                <p>
                  With an OTC desk like Unitic, you request a quote,
                  confirm the rate and complete the trade at the agreed
                  price, so you avoid the price movement that big orders
                  cause on open markets.
                </p>

              </div>

             

              {/* RIGHT — IMAGE */}
              <div className="usdt-otc-visual">
                 <div className="why-choose-image-glow" />
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

                <div className="usdt-otc-tag-icon">
                  ↗
                </div>

                <div>
                  <h3>Competitive INR Pricing</h3>

                  <p>
                    Get competitive rates for large USDT trades.
                  </p>
                </div>

              </div>


              <div className="usdt-otc-tag">

                <div className="usdt-otc-tag-icon">
                  ◇
                </div>

                <div>
                  <h3>Verified Counterparties</h3>

                  <p>
                    Trade securely with verified OTC counterparties.
                  </p>
                </div>

              </div>


              <div className="usdt-otc-tag">

                <div className="usdt-otc-tag-icon">
                  ◷
                </div>

                <div>
                  <h3>Fast OTC Settlement</h3>

                  <p>
                    Complete large transactions with efficient
                    settlement.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SECTION 3 — WHY CHOOSE UNITIC
            ===================================================== */}

        <section
          id="why-choose"
          className="why-choose-section"
          aria-labelledby="why-choose-title"
        >
          <div className="why-choose-container">

            {/* SECTION HEADING */}
            <div className="why-choose-heading">



              <h2 id="main-title">
                Your Trusted<span> USDT OTC Desk in India</span>
              </h2>

              <p className="why-choose-subtitle">
                
              </p>

              <p>
                Whether you are searching for an OTC desk, a USDT OTC
                exchange in India, or a reliable USDT buying and selling
                company, Unitic keeps the process simple, transparent
                and efficient.
              </p>

            </div>


            {/* THREE COLUMNS */}
            <div className="why-choose-layout">

              {/* LEFT CARDS */}
              <div className="why-choose-column why-choose-left">

                <article className="why-choose-card">

                  <div className="why-choose-icon">
                    ◈
                  </div>

                  <div>
                    <h3>Trusted Trading Network</h3>

                    <p>
                      Work with verified participants through a
                      structured OTC process.
                    </p>
                  </div>

                </article>


                <article className="why-choose-card">

                  <div className="why-choose-icon">
                    %
                  </div>

                  <div>
                    <h3>Market-Competitive Pricing</h3>

                    <p>
                      Receive competitive INR quotes for your USDT
                      transaction requirements.
                    </p>
                  </div>

                </article>


                <article className="why-choose-card">

                  <div className="why-choose-icon">
                    ↯
                  </div>

                  <div>
                    <h3>High-Volume Transactions</h3>

                    <p>
                      Handle substantial USDT trades with a dedicated
                      OTC approach.
                    </p>
                  </div>

                </article>

              </div>


              {/* CENTER IMAGE */}
              <div className="why-choose-visual">

                <div className="why-choose-image-glow" />

                <img
                  src="/why_choose.png"
                  alt="Unitic USDT OTC trading"
                  className="why-choose-image"
                />

              </div>


              {/* RIGHT CARDS */}
              <div className="why-choose-column why-choose-right">

                <article className="why-choose-card">

                  <div className="why-choose-icon">
                    ⌕
                  </div>

                  <div>
                    <h3>Secure Trade Processing</h3>

                    <p>
                      Designed to support secure and controlled
                      transaction handling.
                    </p>
                  </div>

                </article>


                <article className="why-choose-card">

                  <div className="why-choose-icon">
                    ◷
                  </div>

                  <div>
                    <h3>Efficient Trade Execution</h3>

                    <p>
                      Simplify the process from quote confirmation
                      to settlement.
                    </p>
                  </div>

                </article>


                <article className="why-choose-card">

                  <div className="why-choose-icon">
                    ◉
                  </div>

                  <div>
                    <h3>Personalized Assistance</h3>

                    <p>
                      Receive dedicated guidance throughout your
                      OTC transaction.
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

            <div className="why-choose-image-glow" />

              <img
                src="/trade_unitic.png"
                alt="Trading USDT through Unitic"
                className="trade-unitic-image"
              />



            </div>


            {/* RIGHT — CONTENT */}
            <div className="trade-unitic-content">

          

              <h2 id="main-title">
                From Quote to
                <br />
                <span>Settlement</span>
              </h2>

              <p style={{ marginBottom: "24px" }}>
                Buy or sell USDT through a structured OTC Process.
              </p>


              {/* STEP 1 */}
              <div className="trade-step">

                <div className="trade-step-number">
                  01
                </div>

                <div>
                  <h3>Request a Quote</h3>

                  <p>
                    Tell us whether you want to buy or sell,
                    and the amount.
                  </p>
                </div>

              </div>


              {/* STEP 2 */}
              <div className="trade-step">

                <div className="trade-step-number">
                  02
                </div>

                <div>
                  <h3>Confirm the Rate</h3>

                  <p>
                    Review the INR price and lock it in.
                  </p>
                </div>

              </div>


              {/* STEP 3 */}
              <div className="trade-step">

                <div className="trade-step-number">
                  03
                </div>

                <div>
                  <h3>Complete Verification</h3>

                  <p>
                    Finish the required KYC and compliance checks.
                  </p>
                </div>

              </div>


              {/* STEP 4 */}
              <div className="trade-step">

                <div className="trade-step-number">
                  04
                </div>

                <div>
                  <h3>Settle the Trade</h3>

                  <p>
                    Funds and USDT are exchanged and confirmed.
                  </p>
                </div>

              </div>

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



      <h2 id="main-title">
        USDT OTC Desk{" "}
        <span>by the Numbers</span>
      </h2>

      <p>
        Key figures that highlight our USDT OTC trading
        activity.
      </p>

    </div>


    {/* STATS GRID */}
    <div className="stats-card">

      {/* STAT 1 */}
      <div className="stat-item">

        <div className="stat-number">
          <StatsCounter
            value={1250}
            suffix="+"
          />
        </div>

        <h3>
          Successful Trades
        </h3>

        <p>
          Completed OTC transactions.
        </p>

      </div>


      {/* STAT 2 */}
      <div className="stat-item">

        <div className="stat-number">
          <StatsCounter
            value={8.5}
            suffix="M+"
          />
        </div>

        <h3>
          USDT Volume
        </h3>

        <p>
          Total USDT transaction volume.
        </p>

      </div>


      {/* STAT 3 */}
      <div className="stat-item">

        <div className="stat-number">
          <StatsCounter
            value={15}
            suffix=" min"
          />
        </div>

        <h3>
          Settlement Time
        </h3>

        <p>
          Average OTC settlement time.
        </p>

      </div>


      {/* STAT 4 */}
      <div className="stat-item">

        <div className="stat-number">
          <StatsCounter
            value={3200}
            suffix="+"
          />
        </div>

        <h3>
          OTC Transactions
        </h3>

        <p>
          Transactions processed through the desk.
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


              <h2 id="main-title">
                Supporting Businesses
                <br />
                with <span>USDT Infrastructure</span>
              </h2>

              <p>
                Discover how USDT OTC solutions can support business
                payments, digital transactions, and high-volume
                settlement needs.
              </p>

            </div>


            {/* PROJECT CARDS */}
            <div className="projects-grid">

              {/* 01 */}
              <article className="project-card">

                <span className="project-card-number">
                  01
                </span>

                <h3>Digital Payments</h3>

                <p>
                  Pay vendors and partners faster with USDT OTC
                  trades settled in INR through our India desk.
                </p>

              </article>


              {/* 02 */}
              <article className="project-card">

                <span className="project-card-number">
                  02
                </span>

                <h3>Business Settlements</h3>

                <p>
                  Settle domestic and cross-border invoices with
                  clear USDT OTC India pricing and structured
                  settlement.
                </p>

              </article>


              {/* 03 */}
              <article className="project-card">

                <span className="project-card-number">
                  03
                </span>

                <h3>Large-Volume Transfers</h3>

                <p>
                  Move high-value USDT without order book slippage,
                  using a fixed quote from our OTC desk.
                </p>

              </article>


              {/* 04 */}
              <article className="project-card">

                <span className="project-card-number">
                  04
                </span>

                <h3>Treasury Management</h3>

                <p>
                  Convert INR to USDT and back at agreed rates to
                  manage your company's digital asset holdings.
                </p>

              </article>


              {/* 05 */}
              <article className="project-card">

                <span className="project-card-number">
                  05
                </span>

                <h3>Merchant Solutions</h3>

                <p>
                  Help merchants accept USDT payments and convert
                  them to INR through a trusted USDT buying and
                  selling partner.
                </p>

              </article>


              {/* 06 */}
              <article className="project-card">

                <span className="project-card-number">
                  06
                </span>

                <h3>Digital Transactions</h3>

                <p>
                  Support online businesses and digital platforms
                  with reliable USDT liquidity and quick settlement.
                </p>

              </article>

            </div>

          </div>
        </section>


        {/* =====================================================
            SECTION 7 — PLATFORMS
            ===================================================== */}

        <PlatformShowcase />


        {/* =====================================================
            SECTION 8 — CTA
            ===================================================== */}

        <section
          id="contact"
          className="cta-section"
          aria-labelledby="cta-title"
        >
          <div className="cta-container">

            <div className="cta-card">

              <div className="cta-glow" />

              <div className="cta-content">


                <h2 id="cta-title">
                  Ready to Buy or
                  <br />
                  <span>Sell USDT?</span>
                </h2>

                <p>
                  Connect with Unitic’s OTC desk and discuss your
                  transaction requirements with our team.
                </p>

                <a
                  href="https://www.uniticexchange.com/help-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Get a USDT OTC Quote
                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SECTION 9 — FAQ
            ===================================================== */}

        <FAQ />


      </main>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />


      {/* =====================================================
          SECTION 10 — DISCLAIMER
          ===================================================== */}

      <div className="simple-disclaimer">

        <h3>
          Disclaimer
        </h3>

        <p>
          Crypto assets and NFTs are highly volatile and speculative in nature, with prices subject to sudden and significant fluctuations due to market demand, regulatory developments, technological changes, liquidity conditions, and external global factors; investments in these digital assets carry a high level of risk, including the potential loss of your entire invested capital, and may not be suitable for all investors. Past performance is not indicative of future results, and there is no guarantee of returns or capital protection. Users are strongly advised to conduct thorough research, assess their financial situation, risk tolerance, and investment objectives before participating, and to trade cautiously by investing only funds they can afford to lose without impacting their financial stability. Unitic Exchange operates exclusively through its official domain, www.uniticexchange.com and users must always verify the website URL carefully before logging in or making any transactions, as the platform is not responsible for losses arising from accessing fraudulent or lookalike websites. Furthermore, Unitic Exchange will never contact users via phone calls, messages, or emails to request sensitive information such as passwords, OTPs, private keys, or account details, and users must not share their confidential information with anyone under any circumstances to avoid scams and unauthorized access.
        </p>

        <div className="copyright">
  <p>Unitic Exchange</p>
  <p>All Rights Reserved © 2026</p>
</div>

      </div>

    </>
  );
}