import React from "react";
import classes from "./ProjectSection.module.css";
import ProjectCardContainer from "./ProjectCardContainer";
import Container from "../../Shared/Container/Container";
const ProjectSection = () => {
  return (
    <section id="project-section" className={classes.projectSection}>
      <h1 className={classes.sectionTitle}>Projects</h1>
      <Container>
        <ProjectCardContainer />
      </Container>
    </section>
  );
};

export default ProjectSection;
