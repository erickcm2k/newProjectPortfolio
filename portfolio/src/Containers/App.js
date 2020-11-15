import React from "react";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import ProjectSection from "../Components/ProjectSection/ProjectSection";
import ProjectCardContainer from "../Components/ProjectSection/ProjectCardContainer/ProjectCardContainer";
import Container from "../Components/Container/Container";
import "./reset.css";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <Hero />
        </Container>
        {/* ProjectSection wrapper for having the blue background */}
        <ProjectSection>
          <Container>
            <ProjectCardContainer />
          </Container>
        </ProjectSection>
        <Container></Container>
      </React.Fragment>
    );
  }
}

export default App;
