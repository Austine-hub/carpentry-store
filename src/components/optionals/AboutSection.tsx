// AboutSection.tsx
import React from "react";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`${styles.aboutSection} ${className}`}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        {/* Main content */}
        <div className={styles.contentGrid}>
          <article className={styles.mainContent}>
            <p className={styles.sectionLabel} aria-label="Section">
              About
            </p>
            <h2 id="about-heading" className={styles.mainHeading}>
              Where Korean heritage meets contemporary design
            </h2>
            <div className={styles.storyContent}>
              <p className={styles.leadParagraph}>
                Founded in Seoul in 2018, Eastern Edition emerged from a deep
                respect for Korean craftsmanship traditions and a vision to
                bridge the gap between heritage and modern living.
              </p>
              <p className={styles.bodyParagraph}>
                Our studio approach focuses on the careful selection of natural
                materials and the preservation of time-honored techniques, while
                creating furniture that speaks to contemporary needs and spaces.
              </p>
              <p className={styles.bodyParagraph}>
                Each piece tells a story of slow craft, sustainable practices,
                and the quiet elegance that defines Korean design philosophy. We
                believe in creating furniture that not only serves its function
                but also carries the soul of its makers.
              </p>
            </div>
          </article>

          <aside className={styles.visualContent} aria-label="Studio imagery">
            <figure className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
                alt="Master craftsperson carefully shaping traditional Korean furniture using time-honored woodworking techniques in Seoul studio"
                className={styles.heroImage}
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.imageOverlay}>
                <span className={styles.overlayText}>Seoul Studio, 2024</span>
              </figcaption>
            </figure>
          </aside>
        </div>

        {/* Company statistics */}
        <section
          className={styles.statsSection}
          aria-labelledby="stats-heading"
        >
          <h3 id="stats-heading" className={styles.visuallyHidden}>
            Company Statistics
          </h3>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber} aria-label="Founded in">
                2018
              </div>
              <div className={styles.statLabel}>Founded in Seoul</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber} aria-label="Projects completed">
                50+
              </div>
              <div className={styles.statLabel}>Bespoke projects completed</div>
            </div>
            <div className={styles.statItem}>
              <div
                className={styles.statNumber}
                aria-label="Material sustainability"
              >
                100%
              </div>
              <div className={styles.statLabel}>Natural materials</div>
            </div>
            <div className={styles.statItem}>
              <div
                className={styles.statNumber}
                aria-label="Generations of knowledge"
              >
                3
              </div>
              <div className={styles.statLabel}>
                Generations of craft knowledge
              </div>
            </div>
          </div>
        </section>

        {/* Company values */}
        <section
          className={styles.valuesSection}
          aria-labelledby="values-heading"
        >
          <h3 id="values-heading" className={styles.valuesHeading}>
            Our values
          </h3>
          <div className={styles.valuesGrid}>
            <article className={styles.valueItem}>
              <h4 className={styles.valueTitle}>Heritage</h4>
              <p className={styles.valueDescription}>
                Preserving traditional Korean woodworking techniques and passing
                them to future generations.
              </p>
            </article>
            <article className={styles.valueItem}>
              <h4 className={styles.valueTitle}>Sustainability</h4>
              <p className={styles.valueDescription}>
                Using only responsibly sourced materials and creating furniture
                built to last generations.
              </p>
            </article>
            <article className={styles.valueItem}>
              <h4 className={styles.valueTitle}>Innovation</h4>
              <p className={styles.valueDescription}>
                Adapting traditional methods for contemporary living without
                compromising craftsmanship quality.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
