import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="hero-img" />
        <img className={styles.colorMode} src={themeIcon} alt="theme-icon" />
      </div>
      <div>
        <h1>
          Edgar
          <br />
          Razuri
        </h1>
        <h2>Frontend Devoloper</h2>
        <span>
          <a href="https://x.com/erazuris" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://github.com/FrontEdd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/edgarazuris/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses
        </p>
        <a href={CV} target="_blank" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
