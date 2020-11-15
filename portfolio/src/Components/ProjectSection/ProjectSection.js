import React from "react";
import classes from "./ProjectSection.module.css";

const ProjectSection = ({ children, ...props }) => {
  return (
    <section className={classes.projectSection} {...props}>
      <h1 className={classes.sectionTitle}>Projects</h1>
      {children}
    </section>
  );
};

export default ProjectSection;
