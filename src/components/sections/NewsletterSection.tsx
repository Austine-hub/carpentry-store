import { useState, useCallback } from "react";
import styles from "./NewsletterSection.module.css";

interface NewsletterSectionProps {
  onSubscribe?: (email: string) => void | Promise<void>;
  className?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

interface FormState {
  email: string;
  isSubmitting: boolean;
  error: string | null;
}

const NewsletterSection = ({
  onSubscribe,
  className = "",
  title = "Newsletter",
  description = "Subscribe to our newsletter for stories and product updates.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: NewsletterSectionProps) => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    isSubmitting: false,
    error: null,
  });

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({
        ...prev,
        email: e.target.value,
        error: null, // ✅ Clear error on user input
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const email = formState.email.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // ✅ Guard clause for invalid email
      if (!email || !emailRegex.test(email)) {
        setFormState((prev) => ({
          ...prev,
          error: "Please enter a valid email address",
        }));
        return;
      }

      setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }));

      try {
        if (onSubscribe) {
          await onSubscribe(email);
        }

        // ✅ Reset state after successful subscribe
        setFormState({ email: "", isSubmitting: false, error: null });
      } catch (err) {
        console.error("Subscription error:", err);
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          error: "Something went wrong. Please try again.",
        }));
      }
    },
    [formState.email, onSubscribe]
  );

  return (
    <section className={`${styles.newsletter} ${className}`.trim()}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.inputGroup}>
              <label htmlFor="newsletter-email" className={styles.visuallyHidden}>
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={formState.email}
                onChange={handleEmailChange}
                placeholder={placeholder}
                className={`${styles.input} ${
                  formState.error ? styles.inputError : ""
                }`.trim()}
                required
                disabled={formState.isSubmitting}
                aria-describedby={
                  formState.error ? "newsletter-error" : undefined
                }
                autoComplete="email"
              />
              <button
                type="submit"
                className={styles.button}
                disabled={formState.isSubmitting || !formState.email.trim()}
                aria-describedby={
                  formState.isSubmitting ? "newsletter-status" : undefined
                }
              >
                {formState.isSubmitting ? "Subscribing..." : buttonText}
              </button>
            </div>

            {formState.error && (
              <div
                id="newsletter-error"
                className={styles.error}
                role="alert"
                aria-live="polite"
              >
                {formState.error}
              </div>
            )}

            {formState.isSubmitting && (
              <div
                id="newsletter-status"
                className={styles.status}
                aria-live="polite"
              >
                Processing your subscription...
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

