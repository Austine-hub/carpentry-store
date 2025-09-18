// FAQSection.tsx
import React, { useState, memo, useMemo } from "react";
import styles from "./FAQSection.module.css";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = memo(() => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = useMemo(
    () => [
      {
        id: 1,
        question: "What materials do you use in your furniture?",
        answer:
          "We primarily use natural materials including solid wood, natural leather, and organic fabrics. Our commitment to sustainability means we source materials locally when possible and focus on durability over trends.",
      },
      {
        id: 2,
        question: "How long does custom furniture take to complete?",
        answer:
          "Custom pieces typically take 8-12 weeks from design approval to completion. This timeline allows for careful craftsmanship and quality control. We'll provide regular updates throughout the process.",
      },
      {
        id: 3,
        question: "Do you offer international shipping?",
        answer:
          "Yes, we ship internationally. Shipping costs and timelines vary by location. For large furniture pieces, we work with specialized freight partners to ensure safe delivery.",
      },
      {
        id: 4,
        question: "Can I visit your Seoul studio?",
        answer:
          "Absolutely! We welcome visits to our Seoul studio by appointment. Contact us at contact@eastern-edition.com to schedule a visit where you can see our craftsmanship process and materials firsthand.",
      },
      {
        id: 5,
        question: "What is your approach to sustainability?",
        answer:
          "Sustainability is central to our philosophy. We use responsibly sourced materials, focus on creating timeless designs that last generations, and work with local artisans to reduce our environmental impact.",
      },
      {
        id: 6,
        question: "Do you provide design consultation services?",
        answer:
          "Yes, we offer comprehensive design consultation for both residential and commercial spaces. Our bespoke service includes space planning, material selection, and custom furniture design.",
      },
    ],
    []
  );

  const toggleFAQ = (id: number) => {
    setOpenFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faqSection} aria-labelledby="faq-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="faq-title" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about Eastern Edition furniture and our design process.
          </p>
        </header>

        <div className={styles.faqList}>
          {faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            return (
              <div key={faq.id} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${isOpen ? styles.active : ""}`.trim()}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <svg
                    className={`${styles.icon} ${isOpen ? styles.iconRotated : ""}`.trim()}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5 7l5 5 5-5H5z" />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`${styles.faqAnswer} ${isOpen ? styles.answerOpen : ""}`.trim()}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerContent}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.contactPrompt}>
          <p className={styles.contactText}>
            Still have questions?{" "}
            <a href="#contact" className={styles.contactLink}>
              Get in touch with our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;

