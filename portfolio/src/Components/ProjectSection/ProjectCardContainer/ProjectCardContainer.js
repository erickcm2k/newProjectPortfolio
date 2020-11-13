import React from "react";
import classes from "./ProjectCardContainer.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectCardContainer = () => {
  const data = [
    {
      projectName: "Covid 19 Tracker1",
      date: "September 2020",
      description:
        "Created as a personal challenge for applying API consuming skills. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage:
        "https://images.unsplash.com/photo-1605116900847-77c07153a083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      technologies: ["HTML", "CSS", "Javascript", "Python"],
    },
    {
      projectName: "Covid 19 Tracker2",
      date: "September 2020",
      description:
        "Created as a personal challenge for applying API consuming skills. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage:
        "https://images.unsplash.com/photo-1605116900847-77c07153a083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      technologies: ["HTML", "CSS", "Javascript", "Python"],
    },
    {
      projectName: "Covid 19 Tracker3",
      date: "September 2020",
      description:
        "Created as a personal challenge for applying API consuming skills. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage:
        "https://images.unsplash.com/photo-1605116900847-77c07153a083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      technologies: ["HTML", "CSS", "Javascript", "Python"],
    },
    {
      projectName: "Covid 19 Tracker4",
      date: "September 2020",
      description:
        "Created as a personal challenge for applying API consuming skills. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage:
        "https://images.unsplash.com/photo-1605116900847-77c07153a083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      technologies: ["HTML", "CSS", "Javascript", "Python"],
    },
    {
      projectName: "Covid 19 Tracker5",
      date: "September 2020",
      description:
        "Created as a personal challenge for applying API consuming skills. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage:
        "https://images.unsplash.com/photo-1605116900847-77c07153a083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Python",
        "HTML",
        "CSS",
        "Javascript",
        "Python",
        "HTML",
        "CSS",
        "Javascript",
        "Python",
      ],
    },
  ];

  return (
    <section className={classes.projectSection}>
      {data.map((card) => {
        return (
          <ProjectCard
            key={card.projectName}
            projectImage={card.projectImage}
            projectName={card.projectName}
            date={card.date}
            description={card.description}
            url={card.url}
            technologies={card.technologies}
            github={card.github}
          />
        );
      })}
    </section>
  );
};

export default ProjectCardContainer;
