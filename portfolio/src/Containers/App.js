import React from "react";
import Navbar from '../Components/Navbar'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <div>
        <p style={{ color: "blue" }}>Hello World</p>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
