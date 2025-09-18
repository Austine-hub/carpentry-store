import React from "react";
import styles from "./ProjectsSection.module.css";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "Blue Bottle Seoul Studio",
    description: "Design and installation focused on material authenticity.",
    imageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&q=60",
  },
  {
    title: "UN Village Lanuvo Hannam",
    description: "Design and installation focused on material authenticity.",
    imageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&q=60",
  },
  {
    title: "Luxembourg Embassy Residence",
    description: "Design and installation focused on material authenticity.",
    imageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&q=60",
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section className={styles.projectsSection} aria-label="Projects Section">
      <div className={styles.container}>
        <h3 className={styles.title}>Projects</h3>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className={styles.projectCard}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.projectImage}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.projectContent}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
