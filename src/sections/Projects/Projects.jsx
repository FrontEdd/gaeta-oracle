import ProjectCard from "../../common/ProjectCard";
import { projectsData } from "../../config/format.config";

import styles from "./ProjectsStyles.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
