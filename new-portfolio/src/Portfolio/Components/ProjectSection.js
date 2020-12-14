import React from "react";
import classes from "./ProjectSection.module.css";
import ProjectCardContainer from "./ProjectCardContainer";
import Container from "../../Shared/Container/Container";
const ProjectSection = () => {
  return (
    <React.Fragment>
      <section className={classes.projectSection}>
        <h1 className={classes.sectionTitle}>Projects</h1>
        <Container>
          <ProjectCardContainer />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ProjectSection;