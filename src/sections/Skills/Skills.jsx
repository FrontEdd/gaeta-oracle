import React from "react";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarckIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

import styles from "./SkillsStyles.module.css";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarckIconLight : checkMarkIconDark;

  const skillGroups = [
    ["HTML", "CSS", "JavaScript", "TypeScript", "Node"],
    ["React", "SQL", "Python", "Tailwind CSS"],
    ["Redux", "Webpack", "Git", "Figma", "Miro"],
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      {skillGroups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          <div className={styles.skillList}>
            {group.map((skill) => (
              <SkillList key={skill} src={checkMarkIcon} skill={skill} />
            ))}
          </div>
          {groupIndex < skillGroups.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </section>
  );
}

export default Skills;
