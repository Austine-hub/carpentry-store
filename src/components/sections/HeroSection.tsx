import React, { memo } from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  images?: ReadonlyArray<{
    src: string;
    alt: string;
    loading?: 'lazy' | 'eager';
  }>;
  className?: string;
}

const defaultImages: ReadonlyArray<{
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}> = [
  {
    src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b69?w=1200&q=80',
    alt: 'Modern furniture piece showcasing Eastern Edition craftsmanship',
    loading: 'eager'
  },
  {
    src: 'https://images.unsplash.com/photo-1543292630-3c2a4b4b6b07?w=1200&q=80',
    alt: 'Contemporary design with traditional Korean elements',
    loading: 'lazy'
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
    alt: 'Handcrafted wooden furniture detail',
    loading: 'lazy'
  },
  {
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80',
    alt: 'Minimalist furniture design in modern setting',
    loading: 'lazy'
  }
];

const HeroSection: React.FC<HeroSectionProps> = memo(({
  title = "The significance of heritage and contemporary craft.",
  subtitle = "A studio approach to furniture and materials — where Korean tradition meets modern living.",
  primaryButtonText = "Discover the collection",
  secondaryButtonText = "Projects",
  onPrimaryClick,
  onSecondaryClick,
  images = defaultImages,
  className = ""
}) => {
  return (
    <section className={`${styles.hero} ${className}`} aria-label="Hero section">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            
            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.buttonGroup} role="group" aria-label="Hero actions">
              <button
                type="button"
                className={`${styles.button} ${styles.buttonPrimary}`}
                onClick={onPrimaryClick || (() => window.location.href = '#shop')}
              >
                {primaryButtonText}
              </button>
              
              <button
                type="button"
                className={`${styles.button} ${styles.buttonSecondary}`}
                onClick={onSecondaryClick || (() => window.location.href = '#projects')}
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>

          <div className={styles.imageGrid}>
            {images.slice(0, 4).map((image, index) => (
              <div key={`hero-image-${index}`} className={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.image}
                  loading={image.loading || 'lazy'}
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.decorativeOverlay} aria-hidden="true" />
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
