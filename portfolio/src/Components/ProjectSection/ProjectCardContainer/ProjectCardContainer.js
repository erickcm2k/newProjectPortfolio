import React from "react";
import classes from "./ProjectCardContainer.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import codivTracker from "../../../assets/images/covid-19-tracker.png";
import calculadora from "../../../assets/images/calculadora.png";
import libraryManager from "../../../assets/images/biblioteca.png";
import knn from "../../../assets/images/knn.png";
import nfaValidador from "../../../assets/images/nfa-validator.png";
import salesSystem from "../../../assets/images/sales-system.png";
import careerQuiz from "../../../assets/images/career-quiz.png";
const ProjectCardContainer = () => {
  const data = [
    {
      projectName: "Covid 19 Tracker",
      date: "September 2020",
      description:
        "Created as a personal challenge for applying API consuming skills. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage: codivTracker,
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      projectName: "Library Manager",
      date: "September 2020",
      description:
        "Created as final project for Object Oriented Programming. Allows the user to manage a library collection using an intuitive GUI.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage: libraryManager,
      technologies: ["Java", "MySQL"],
    },
    {
      projectName: "KNN Simulator",
      date: "September 2020",
      description:
        "Another challenge for Theory of Computation. A graphic representation for KNN (K Nearest Neighbors) pattern-recognition algorithm using Matplotlib.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage: knn,
      technologies: ["Python"],
    },
    {
      projectName: "NFA String Validator",
      date: "September 2020",
      description:
        "Created as a challenge for Theory of Computation. Allows the user to validate character strings receiving their NFA state-transition table.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage: nfaValidador,
      technologies: ["C++"],
    },
    {
      projectName: "Sales System",
      date: "September 2020",
      description:
        "Console application for Data Structures & Algorithms. Simulates a sales system, receiving product names and allowing the user to find it by its code. Uses linked lists and an AVL Tree, not the most optimal implementation.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage: salesSystem,
      technologies: ["C"],
    },
    {
      projectName: "Derivatives & Integrals Calculator",
      date: "September 2020",
      description:
        "Challenge for One Variable Calculus. Calculates some derivative and integrals, receiving a symbolic string as argument. Uses Sympy and PyQt libraries.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage: calculadora,
      technologies: ["Python"],
    },

    {
      projectName: "Career Quiz",
      date: "September 2020",
      description:
        "This was my very first tech project, made during High School (CECyT 12 IPN). Its purpose was to help my classmates to choose a technical carreer, giving a carrer quiz with information about the technical education offered by the school.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://www.google.com.mx/",
      projectImage: careerQuiz,
      technologies: ["HTML", "CSS", "Javascript"],
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
