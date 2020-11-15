import React from "react";
import "./Navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <nav className={this.state.visible ? "Navbar" : "Navbar-hiden"}>
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
  }
}

export default NavBar;
