import React from "react";
import styles from "./InfoGrid.module.css";

interface InfoGridItem {
  id: string;
  title: string;
  description: string;
  href: string;
  linkText?: string;
}

interface InfoGridProps {
  items?: InfoGridItem[];
  className?: string;
  "data-testid"?: string;
}

const defaultItems: InfoGridItem[] = [
  {
    id: "philosophy",
    title: "Philosophy",
    description: "Bridging the past to the future: natural materials and slow craft.",
    href: "#philosophy",
    linkText: "Learn more",
  },
  {
    id: "archive",
    title: "Archive",
    description: "Press, exhibitions and collaborations across the years.",
    href: "#archive",
    linkText: "Learn more",
  },
  {
    id: "bespoke",
    title: "Bespoke",
    description: "Custom furniture and consulting for private and commercial spaces.",
    href: "#bespoke",
    linkText: "Learn more",
  },
];

export const InfoGrid: React.FC<InfoGridProps> = ({
  items = defaultItems,
  className = "",
  "data-testid": testId,
}) => {
  return (
    <section
      className={`${styles.container} ${className}`}
      data-testid={testId}
      role="region"
      aria-label="Company information sections"
    >
      <div className={styles.grid}>
        {items.map((item) => (
          <article
            key={item.id}
            className={styles.card}
            data-card-id={item.id}
          >
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <a
              href={item.href}
              className={styles.link}
              aria-label={`${item.linkText || "Learn more"} about ${item.title.toLowerCase()}`}
            >
              {item.linkText || "Learn more"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoGrid;
