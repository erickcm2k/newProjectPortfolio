import React from "react";

import ProjectCard from "./ProjectCard";

import classes from "./ProjectCardContainer.module.css";

import calculadora from "../../assets/images/calculadora.png";
import libraryManager from "../../assets/images/biblioteca.png";
import knn from "../../assets/images/knn.png";
import nfaValidador from "../../assets/images/nfa-validator.png";
import salesSystem from "../../assets/images/sales-system.png";
import careerQuiz from "../../assets/images/career-quiz.png";
import coronAImage from "../../assets/images/coronaimage.png";
import covidTracker from "../../assets/images/covid-19-tracker.png";

const ProjectCardContainer = () => {
  const data = [
    {
      projectName: "CoronAImage",
      date: "December 2020",
      description:
        "I depeloved the frontend of this web application where users upload a chest tomography and the app tells you if the patient is COVID19 positive or not.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      url: "https://coronaimage.vercel.app/",
      projectImage: coronAImage,
      technologies: ["React", "HTML", "CSS", "Javascript"],
    },
    {
      projectName: "Covid 19 Tracker",
      date: "September 2020",
      description:
        "Created as a personal challenge project. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      projectImage: covidTracker,
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      projectName: "Library Manager",
      date: "June 2020",
      description:
        "Created as final project for Object Oriented Programming. Allows the user to manage a library collection using an intuitive GUI.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      projectImage: libraryManager,
      technologies: ["Java", "MySQL"],
    },
    {
      projectName: "KNN Simulator",
      date: "March 2020",
      description:
        "Another challenge for Theory of Computation. A graphic representation for KNN (K Nearest Neighbors) pattern-recognition algorithm using Matplotlib.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      projectImage: knn,
      technologies: ["Python"],
    },
    {
      projectName: "NFA String Validator",
      date: "February 2020",
      description:
        "Created as a challenge for Theory of Computation. Allows the user to validate character strings receiving their NFA state-transition table.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      projectImage: nfaValidador,
      technologies: ["C++"],
    },
    {
      projectName: "Sales System",
      date: "December 2019",
      description:
        "Console application for Data Structures & Algorithms. Simulates a sales system, receiving product names and allowing the user to find it by its code. Uses linked lists and an AVL Tree, not the most optimal implementation.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      projectImage: salesSystem,
      technologies: ["C"],
    },
    {
      projectName: "Derivatives & Integrals Calculator",
      date: "November 2019",
      description:
        "Challenge for One Variable Calculus. Calculates some derivative and integrals, receiving a symbolic string as argument. Uses Sympy and PyQt libraries.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
      projectImage: calculadora,
      technologies: ["Python"],
    },

    {
      projectName: "Career Quiz",
      date: "May 2018",
      description:
        "This was my very first tech project, made during High School (CECyT 12 IPN). Its purpose was to help my classmates to choose a technical carreer, giving a carrer quiz with information about the technical education offered by the school.",
      github: "https://github.com/erickcm2k/covid-19-tracker",
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
