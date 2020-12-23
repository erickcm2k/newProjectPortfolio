import React from "react";
import Hero from "./Portfolio/Components/Hero";
import NavbarFunc from "./Shared/Navigation/NavbarFunc";
// import Navbar from "./Shared/Navigation/Navbar";
import ProjectSection from "./Portfolio/Components/ProjectSection";
import "./reset.css";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <NavbarFunc />
        <Hero />
        <ProjectSection />
      </React.Fragment>
    );
  }
}

export default App;
