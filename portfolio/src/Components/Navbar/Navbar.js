import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="Navbar">
      <ul className="List">
        <li className="logo">
          <a href="https://www.google.com">
            <span>Erick Castañeda</span>
          </a>
        </li>
        <li>
          <a href="https://www.google.com">About Me</a>
        </li>
        <li>
          <a href="https://www.google.com">Projects</a>
        </li>
        <li>
          <a href="https://www.google.com">Skills</a>
        </li>
        <li>
          <a href="https://www.google.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
