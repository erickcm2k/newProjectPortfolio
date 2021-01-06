import React from "react";
import "./DrawerMenu.scss";
import NavLinks from "./NavLinks";
const DrawerMenu = (props) => {
  return (
    <nav className={props.show ? "side-drawer open" : "side-drawer"}>
      <ul className="menu">
        <li className="close-menu" onClick={props.closeButtonAction}>
          <i className="fas fa-times"></i>
        </li>
        <NavLinks closeDrawer={props.closeDrawer} />
      </ul>
    </nav>
  );
};

export default DrawerMenu;
