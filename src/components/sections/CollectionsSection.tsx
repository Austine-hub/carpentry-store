import React, { memo } from "react";
import styles from "./CollectionsSection.module.css";

interface Collection {
  title: string;
  img: string;
  alt: string;
  href: string;
}

interface CollectionsSectionProps {
  collections?: Collection[];
}

const defaultCollections: Collection[] = [
  { 
    title: "Sofa", 
    img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b69?w=800&q=60",
    alt: "A modern sofa with a minimalist design.",
    href: "#sofa"
  },
  { 
    title: "Chair", 
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=60",
    alt: "A handcrafted wooden chair in a light-filled room.",
    href: "#chair"
  },
  { 
    title: "Table", 
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=60",
    alt: "A sleek, modern coffee table with simple lines.",
    href: "#table"
  },
  { 
    title: "Bed", 
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=60",
    alt: "A luxurious bed with a minimalist frame and soft bedding.",
    href: "#bed"
  },
];

const CollectionsSection: React.FC<CollectionsSectionProps> = memo(
  ({ collections = defaultCollections }) => {
    return (
      <section className={styles.collectionsSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>Shop our collections</h2>
          <p className={styles.description}>
            The importance of heritage, locality, and sustainability is the grounding vision for Eastern Edition.
          </p>

          <div className={styles.grid}>
            {collections.map((collection) => (
              <a 
                key={collection.title} 
                href={collection.href} 
                className={styles.collectionLink}
              >
                <article className={styles.collectionCard}>
                  <div className={styles.imageContainer}>
                    <img 
                      src={collection.img} 
                      alt={collection.alt} 
                      className={styles.image}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.collectionTitle}>{collection.title}</h3>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

CollectionsSection.displayName = "CollectionsSection";

export default CollectionsSection;
