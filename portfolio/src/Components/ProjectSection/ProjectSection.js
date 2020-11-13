import React from "react";
import classes from "./ProjectSection.module.css";
import ProjectCardContainer from "./ProjectCardContainer/ProjectCardContainer";

const ProjectSection = () => {
  return (
    <section className={classes.projectSection}>
      <h1 className={classes.sectionTitle}>Projects</h1>
      <ProjectCardContainer />
    </section>
  );
};

export default ProjectSection;
