import React, { useState } from "react";

import Container from "../../Shared/Container/Container";
import DrawerMenu from "./DrawerMenu";
import Backdrop from "./Backdrop";

import useWindowSize from "../../Hooks/useWindowSize";
import usePageOffset from "../../Hooks/usePageOffset";
import usePreviousOffset from "../../Hooks/usePreviousOffset";

import "./Navbar.scss";

const NavBarFunc = () => {
  const windowSize = useWindowSize();
  const offSet = usePageOffset();
  const previous = usePreviousOffset(offSet);

  const [drawerMenuVisible, setdrawerMenuVisible] = useState(false);

  const backdropClickHandler = () => {
    setdrawerMenuVisible(!drawerMenuVisible);
  };

  const handleScrollUpdates = () => {
    if (windowSize.width <= 768) {
      return true;
    }
    let visible = true;
    if (offSet.y > 0) {
      visible = previous.y >= offSet.y;
    }

    return visible;
  };

  return (
    <>
      <nav className={handleScrollUpdates() ? "Navbar" : "Navbar-hiden"}>
        <Container>
          <DrawerMenu
            closeButtonAction={backdropClickHandler}
            show={drawerMenuVisible}
          />
          {drawerMenuVisible && <Backdrop click={backdropClickHandler} />}
          <ul className="List">
            <li className="List-Logo">
              <span>Erick Castañeda</span>
            </li>

            <li className="Active">
              <a href="https://www.google.com.mx/">Skills</a>
            </li>
            <li className="Active">
              <a href="https://www.google.com.mx/">Projects</a>
            </li>
            <li className="Active">
              <a href="https://www.google.com.mx/">Blog</a>
            </li>
            <li className="Active">
              <a href="https://www.google.com.mx/">Contact</a>
            </li>
            <li className="Toggle" onClick={backdropClickHandler}>
              <i className="fas fa-bars fa-2x"></i>
            </li>
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default NavBarFunc;
