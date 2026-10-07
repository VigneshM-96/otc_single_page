"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is there a crypto OTC desk in India?",
    answer:
      "Yes. Crypto OTC desks operate in India, including services that facilitate larger-volume USDT transactions. Providers conducting activities covered by India’s VDA framework may have FIU-IND registration and AML compliance obligations.",
  },

  {
    question: "Is OTC trading legal in India?",
    answer:
      "OTC trading of virtual digital assets is not simply prohibited as a category. However, applicable AML, tax, KYC, reporting and other legal requirements can apply depending on the activities and parties involved. VDA service providers covered by PMLA requirements must comply with FIU-IND obligations.",
  },

  {
    question: "Can I legally buy USDT in India?",
    answer:
      "USDT is treated within India’s virtual digital asset framework, and buying or selling VDA can have applicable tax and compliance consequences. Users should use compliant channels and maintain appropriate transaction records.",
  },

  {
    question: "Where Can I Sell USDT at a Competitive Price in India?",
    answer:
      "Sell USDT through Unitic's OTC Desk with competitive INR pricing, structured execution, and dedicated support for larger-volume transactions.",
  },

  {
    question: "Can I Buy and Sell USDT in India?",
    answer:
      "Yes. You can buy and sell USDT in India through crypto platforms and OTC desks that support USDT transactions. For larger trades, an OTC desk can provide negotiated quotes and structured settlement. Users should verify the provider’s applicable compliance requirements and understand the tax obligations associated with VDA transactions.",
  },

  {
    question: "How can I connect/use USDT with Unitic?",
    answer:
      "For larger USDT transactions, you can contact Unitic's OTC desk and request a quote. Unitic currently describes its OTC service as supporting large-volume trades, INR-to-crypto conversion, dedicated USDT trading, and personalized pricing.",
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

        {/* HEADING */}
        <div className="faq-heading">

        

          <h2 id="main-title">
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Find answers to common questions about USDT OTC trading,
            buying and selling USDT in India, and connecting with
            Unitic's OTC desk.
          </p>

        </div>


        {/* FAQ LIST */}
        <div className="faq-list">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${
                  isOpen ? "faq-item-open" : ""
                }`}
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

                    {/* <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span> */}

                    {faq.question}

                  </span>


                  <span
                    className="faq-icon"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                </button>


                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-wrapper"
                >

                  <div className="faq-answer">

                    <p>
                      {faq.answer}
                    </p>

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