import React from "react";
import "./Hero.css";
import Container from "../../Shared/Container/Container";
import Typical from "react-typical";
import resume from "../../Assets/pdf/resume.pdf";

const Hero = () => {
  
  const openResume = () => {
    window.open(resume);
  };

  return (
    <Container>
      <section className="hero">
        <article className="hero-container">
          <div className="about-me">
            <div className="about-me--name">
              Hi, I’m <span className="orangize">Erick Castañeda</span>!
            </div>
            <div className="about-me--whatiam">
              I'm a{" "}
              <Typical
                loop={Infinity}
                className="orangize"
                wrapper="b"
                steps={[
                  "Computer Engineering Student 🖥",
                  1000,
                  "ReactJS Developer",
                  1000,
                  "NodeJS Developer",
                  1000,
                  "Star Wars Fan 🎬",
                  1000,
                ]}
              />
            </div>
            <button onClick={openResume} className="about-me--button">
              View my CV
            </button>
          </div>
          <div className="picture-container">
            <figure className="picture"></figure>
          </div>
        </article>
        <article className="description">
          <div className="icon-container">
            <ul className="icon-container--list">
              <li>
                <a href="https://github.com/erickcm2k" target="_blank">
                  <i className="fab fa-github fa-3x px-md-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/erickcastanedamartinez/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in fa-3x px-md-1"></i>
                </a>
              </li>
              <li>
                <a href="https://telegram.me/erickcm2k" target="_blank">
                  <i className="fab fa-telegram fa-3x px-md-1"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="message">
            <p>Constantly trying to become the best version of myself</p>
            <p>
              Currently learning how to build web apps using the{" "}
              <span className="nodeish">ME</span>
              <span className="reactish">R</span>
              <span className="nodeish">N</span> stack
            </p>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default Hero;
