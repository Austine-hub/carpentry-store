// CTASection.tsx
import React, { memo, useMemo, useCallback } from "react";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: "light" | "dark" | "image";
  backgroundImage?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

const ChevronRightIcon = () => (
  <svg
    className={styles.buttonIcon}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const CheckIcon = () => (
  <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const LoadingSpinner = () => (
  <svg className={styles.loadingSpinner} viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
      opacity="0.25"
    />
    <path
      fill="currentColor"
      d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const CTASection: React.FC<CTASectionProps> = memo(
  ({
    title = "Elevate your space with timeless design",
    description = "Discover furniture that bridges Korean heritage with contemporary living. Each piece tells a story of craftsmanship and authenticity.",
    primaryButtonText = "Schedule consultation",
    secondaryButtonText = "View collections",
    onPrimaryClick = () => console.log("Primary CTA clicked"),
    onSecondaryClick = () => console.log("Secondary CTA clicked"),
    variant = "light",
    backgroundImage = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    className = "",
    loading = false,
    disabled = false,
  }: CTASectionProps) => {
    const backgroundClasses = useMemo(() => {
      const baseClass = styles.section;
      if (variant === "dark") return `${baseClass} ${styles.darkVariant}`;
      if (variant === "image") return `${baseClass} ${styles.imageVariant}`;
      return `${baseClass} ${styles.lightVariant}`;
    }, [variant]);

    const getButtonClasses = useCallback(
      (isPrimary: boolean) => {
        const base = `${styles.button} ${
          isPrimary ? styles.primaryButton : styles.secondaryButton
        }`;
        const states = `${disabled ? styles.disabled : ""} ${
          loading && isPrimary ? styles.loading : ""
        }`;
        return `${base} ${states}`.trim();
      },
      [disabled, loading]
    );

    const trustIndicators = useMemo(
      () => [
        { text: "Free consultation", id: "consultation" },
        { text: "Custom solutions", id: "solutions" },
        { text: "Heritage craftsmanship", id: "craftsmanship" },
      ],
      []
    );

    return (
      <section
        className={`${backgroundClasses} ${className}`.trim()}
        style={variant === "image" ? { backgroundImage: `url(${backgroundImage})` } : {}}
        role="region"
        aria-labelledby="cta-heading"
      >
        {variant === "image" && <div className={styles.imageOverlay} />}
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <h2 id="cta-heading" className={styles.heading}>
              {title}
            </h2>
            <p className={styles.description}>{description}</p>

            <div
              className={styles.buttonGroup}
              role="group"
              aria-label="Call to action buttons"
            >
              <button
                onClick={onPrimaryClick}
                className={getButtonClasses(true)}
                aria-label={
                  loading ? `${primaryButtonText} - Loading` : primaryButtonText
                }
                disabled={disabled || loading}
                type="button"
              >
                {loading && <LoadingSpinner />}
                <span className={loading ? styles.buttonTextLoading : undefined}>
                  {primaryButtonText}
                </span>
                {!loading && <ChevronRightIcon />}
              </button>

              <button
                onClick={onSecondaryClick}
                className={getButtonClasses(false)}
                aria-label={secondaryButtonText}
                disabled={disabled}
                type="button"
              >
                {secondaryButtonText}
              </button>
            </div>

            <div
              className={styles.trustIndicators}
              role="list"
              aria-label="Service highlights"
            >
              {trustIndicators.map(({ text, id }) => (
                <div key={id} className={styles.trustItem} role="listitem">
                  <CheckIcon />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

CTASection.displayName = "CTASection";

export default CTASection;
