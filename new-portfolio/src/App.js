import React from "react";
import Hero from "./Portfolio/Components/Hero";
import Navbar from "./Shared/Navigation/Navbar";
import ProjectSection from "./Portfolio/Components/ProjectSection";
import BackToTop from "./Shared/BackToTop";
import "./reset.css";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <ProjectSection />
        <BackToTop />
      </React.Fragment>
    );
  }
}

export default App;
