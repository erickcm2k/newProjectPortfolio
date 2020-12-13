import React from "react";
import Container from "../../Shared/Container/Container";
import DrawerMenu from "./DrawerMenu";
import Backdrop from "./Backdrop";

import "./Navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      responsiveMenu: false,
    };
  }

  // Code for handling scrollbar movements
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    let visible = true;
    // Prevents problems with iOS overscroll
    if (currentScrollPos > 0) {
      visible = prevScrollpos > currentScrollPos;
    }

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  toggleBurgerButton = () => {
    this.setState({
      responsiveMenu: !this.state.responsiveMenu,
    });
  };

  backdropClickHandler = () => {
    this.setState({ responsiveMenu: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    let backdrop;
    if (this.state.responsiveMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        <nav className={this.state.visible ? "Navbar" : "Navbar-hiden"}>
          <Container>
            {/* {sideDrawer} */}
            <DrawerMenu
              toggleButton={this.toggleBurgerButton}
              show={this.state.responsiveMenu}
            />
            {backdrop}
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
              <li className="Toggle" onClick={() => this.toggleBurgerButton()}>
                <a href="https://www.google.com.mx/">
                  <i className="fas fa-bars"></i>
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
