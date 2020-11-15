import React from "react";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import ProjectSection from "../Components/ProjectSection/ProjectSection";
import "./reset.css";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <ProjectSection />
      </React.Fragment>
    );
  }
}

export default App;
