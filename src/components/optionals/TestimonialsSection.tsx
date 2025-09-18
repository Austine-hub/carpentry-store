import { useState, useCallback, useEffect, memo } from "react";
import styles from "./TestimonialsSection.module.css";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  project?: string;
  avatar?: string;
  avatarAlt?: string;
}

interface TestimonialsSectionProps {
  className?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Kim",
    title: "Interior Designer",
    company: "Studio Minimal",
    content:
      "Eastern Edition's approach to furniture design is truly exceptional. Their ability to blend traditional Korean craftsmanship with contemporary aesthetics creates pieces that are both timeless and relevant. The attention to detail in every piece reflects their deep respect for heritage.",
    project: "Blue Bottle Seoul Studio",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94efcd1e4860?q=80&fm=jpg",
    avatarAlt: "Portrait of Sarah Kim",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Architect",
    company: "Chen & Associates",
    content:
      "Working with Eastern Edition on our Luxembourg Embassy project was remarkable. Their understanding of space, materiality, and cultural sensitivity resulted in furniture that perfectly complemented our architectural vision. Each piece tells a story.",
    project: "Luxembourg Embassy Residence",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bc06429c3f?q=80&fm=jpg",
    avatarAlt: "Portrait of Michael Chen",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Creative Director",
    company: "Artisan Spaces",
    content:
      "The philosophy of slow craft and natural materials resonates deeply with our values. Eastern Edition doesn't just create furniture; they create experiences that connect people to the authenticity of traditional making processes.",
    project: "UN Village Lanuvo Hannam",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&fm=jpg",
    avatarAlt: "Portrait of Elena Rodriguez",
  },
  {
    id: 4,
    name: "James Park",
    title: "Hotel Manager",
    company: "Boutique Hotels Seoul",
    content:
      "Our guests consistently comment on the beautiful furniture throughout our property. Eastern Edition's pieces have become conversation starters, embodying the perfect balance between comfort and artistic expression.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&fm=jpg",
    avatarAlt: "Portrait of James Park",
  },
  {
    id: 5,
    name: "Anna Sato",
    title: "Private Collector",
    company: "Tokyo",
    content:
      "Each piece I've acquired from Eastern Edition has become a centerpiece in my home. The quality is unmatched, and the story behind each creation adds profound meaning to daily living.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a561c289e65?q=80&fm=jpg",
    avatarAlt: "Portrait of Anna Sato",
  },
];

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600&q=60",
    alt: "Interior of the Blue Bottle Seoul Studio project",
    title: "Blue Bottle Seoul Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1504624467554-15950005781a?w=600&q=60",
    alt: "Bespoke furniture in the UN Village Lanuvo Hannam project",
    title: "UN Village Lanuvo Hannam",
  },
  {
    src: "https://images.unsplash.com/photo-1521782294436-bc17f69466c4?w=600&q=60",
    alt: "Custom furniture in the Luxembourg Embassy Residence",
    title: "Luxembourg Embassy Residence",
  },
];

const TestimonialsSection = memo(
  ({ className = "", testimonials = defaultTestimonials }: TestimonialsSectionProps) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [animating, setAnimating] = useState(false);

    const nextTestimonial = useCallback(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setAnimating(false);
      }, 250);
    }, [testimonials.length]);

    const prevTestimonial = useCallback(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setAnimating(false);
      }, 250);
    }, [testimonials.length]);

    const goToTestimonial = useCallback(
      (index: number) => {
        setAnimating(true);
        setTimeout(() => {
          setCurrentTestimonial(index);
          setAnimating(false);
        }, 250);
      },
      []
    );

    // Keyboard navigation (Arrow keys)
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") nextTestimonial();
        if (e.key === "ArrowLeft") prevTestimonial();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextTestimonial, prevTestimonial]);

    const current = testimonials[currentTestimonial];

    return (
      <section
        className={`${styles.testimonialsSection} ${className}`}
        aria-label="Client Testimonials"
      >
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>What our clients say</h2>
            <p className={styles.description}>
              Stories from those who have experienced the significance of heritage and
              contemporary craft.
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className={styles.testimonialContainer}>
            <div
              className={`${styles.testimonialCard} ${
                animating ? styles.fadeOut : styles.fadeIn
              }`}
            >
              {/* Quote Content */}
              <div className={styles.quoteSection}>
                <div className={styles.quoteIcon}>
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 12.4C0 5.6 3.2 0 9.6 0v4.8C6.4 4.8 4.8 7.2 4.8 9.6h4.8V24H0V12.4zm14.4 0C14.4 5.6 17.6 0 24 0v4.8c-3.2 0-4.8 2.4-4.8 4.8H24V24H14.4V12.4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <blockquote className={styles.quote}>{current.content}</blockquote>
              </div>

              {/* Client Info */}
              <div className={styles.clientInfo}>
                {current.avatar && (
                  <img
                    src={current.avatar}
                    alt={current.avatarAlt}
                    className={styles.avatar}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className={styles.clientDetails}>
                  <h4 className={styles.clientName}>{current.name}</h4>
                  <p className={styles.clientSubtitle}>
                    {current.title}, {current.company}
                  </p>
                  {current.project && (
                    <p className={styles.projectInfo}>Project: {current.project}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className={styles.controls}>
              <button
                onClick={prevTestimonial}
                className={styles.navButton}
                aria-label="Previous testimonial"
              >
                <svg
                  className={styles.navIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 18l-6-6 6-6"
                  />
                </svg>
              </button>

              <div
                className={styles.indicators}
                role="group"
                aria-label="Testimonial navigation indicators"
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`${styles.indicator} ${
                      index === currentTestimonial ? styles.active : ""
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentTestimonial ? "true" : "false"}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className={styles.navButton}
                aria-label="Next testimonial"
              >
                <svg
                  className={styles.navIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 18l6-6-6-6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Featured Projects Strip */}
          <div className={styles.featuredProjects}>
            <h3 className={styles.projectsTitle}>Featured in projects</h3>
            <div className={styles.projectsGrid}>
              {projectImages.map((project) => (
                <div key={project.title} className={styles.projectCard}>
                  <img
                    src={project.src}
                    alt={project.alt}
                    className={styles.projectImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.projectInfo}>
                    <h4 className={styles.projectCardTitle}>{project.title}</h4>
                    <p className={styles.projectCardSubtitle}>
                      Bespoke furniture solutions
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;