import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

import styles from "./ProjectsStyles.module.css";

const projectsData = [
  {
    src: viberr,
    title: "MapsApp",
    description: "Searching Places App",
    link: "https://github.com/FrontEdd/maps-app",
  },
  {
    src: freshBurger,
    title: "MovieApp",
    description: "Searching Movies App",
    link: "https://github.com/FrontEdd/movieApp-OMDbApi",
  },
  {
    src: hipsster,
    title: "LandingPage",
    description: "Testing Landing Page",
    link: "https://github.com/FrontEdd/landing-page-conversion",
  },
  {
    src: fitLift,
    title: "TenpoChallenge",
    description: "Technical Challenge App",
    link: "https://github.com/FrontEdd/tenpo-challenge",
  },
];

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
