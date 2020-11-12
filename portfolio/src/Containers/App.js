import React from "react";
import Hero from "../Components/Hero/Hero";
import Navbar from '../Components/Navbar/Navbar'

import './reset.css'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <Hero/>
      </React.Fragment>
    );
  }
}

export default App;
