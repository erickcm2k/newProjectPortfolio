import React from "react";
import "./DrawerMenu.scss";

const DrawerMenu = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul className="menu">
        <li className="menu-item close-menu" onClick={props.toggleButton}>
          <i className="fas fa-times-circle"></i>
        </li>

        <li className="menu-item">
          <a href="https://www.google.com">Projects</a>
        </li>
        <li className="menu-item">
          <a href="https://www.google.com">Skills</a>
        </li>
        <li className="menu-item">
          <a href="https://www.google.com">Contact</a>
        </li>
        <li className="close-menu"></li>
      </ul>
    </nav>
  );
};

export default DrawerMenu;
