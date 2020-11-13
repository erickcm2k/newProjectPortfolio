import React from "react";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const btnClick = (url) => {
    window.open(url);
  };

  return (
    <article className={classes.card}>
      <figure className={classes.projectImageContainer}>
        <img src={props.projectImage} className={classes.projectImage} />
      </figure>
      <div className={classes.cardBody}>
        <h2 className={classes.projectName}>{props.projectName}</h2>
        <p className={classes.date}>{props.date}</p>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.technologiesContainer}>
          {props.technologies.map((technologie) => {
            return (
              <p key={technologie} className={classes.technologie}>
                {technologie}
              </p>
            );
          })}
        </div>
        <div className={classes.buttonContainer}>
          <button
            onClick={() => btnClick(props.github)}
            className={classes.githubButton}
          >
            View on Github
          </button>
          <button
            onClick={() => btnClick(props.github)}
            className={classes.visitButton}
          >
            Visit
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
