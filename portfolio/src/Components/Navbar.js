import React from "react";
import "./Navbar.css";

class NavBar extends React.Component {
  render() {
    return <div>
        <nav className="Navbar">
            <ul className="List">
                <li><a href="https://www.google.com">Erick Castañeda</a></li>
                <li><a href="https://www.google.com">About Me</a></li>
                <li><a href="https://www.google.com">Projects</a></li>
                <li><a href="https://www.google.com">Skills</a></li>
                <li><a href="https://www.google.com">Learning</a></li>
            </ul>
        </nav>
    </div>;
  }
}

export default NavBar;
