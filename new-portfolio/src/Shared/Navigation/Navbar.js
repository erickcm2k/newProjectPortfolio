import React, { useState } from "react";

import NavLinks from "./NavLinks";
import Container from "../Container/Container";
import DrawerMenu from "./DrawerMenu";
import Backdrop from "./Backdrop";

import useWindowSize from "../../Hooks/useWindowSize";
// import usePageOffset from "../../Hooks/usePageOffset";
// import usePreviousOffset from "../../Hooks/usePreviousOffset";

import "./Navbar.scss";

const NavBarFunc = () => {
  const windowSize = useWindowSize();
  // const offSet = usePageOffset();
  // const previous = usePreviousOffset(offSet);

  const [drawerMenuVisible, setDrawerMenuVisible] = useState(false);

  const backdropClickHandler = () => {
    setDrawerMenuVisible(!drawerMenuVisible);
  };

  const closeDrawer = () => setDrawerMenuVisible(false);

  // const handleScrollUpdates = () => {
  //   if (windowSize.width <= 768) {
  //     return true;
  //   }
  //   let visible = true;
  //   if (offSet.y > 0) {
  //     visible = previous.y >= offSet.y;
  //   }

  //   return visible;
  // };

  return (
    <>
      {/* <nav className={handleScrollUpdates() ? "Navbar" : "Navbar-hiden"}> */}
      <nav className={"Navbar"}>
        <Container>
          <DrawerMenu
            closeDrawer={closeDrawer}
            closeButtonAction={backdropClickHandler}
            show={drawerMenuVisible}
          />
          {drawerMenuVisible && <Backdrop click={backdropClickHandler} />}
          <ul className="List">
            <li className="List-Logo">
              <span>Erick Castañeda</span>
            </li>
            {windowSize.width > 768 && <NavLinks />}

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
