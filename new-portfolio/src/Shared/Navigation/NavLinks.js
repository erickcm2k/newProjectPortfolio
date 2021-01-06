import React from "react";
import { Link } from "react-scroll";
import classes from "./NavLinks.module.scss";
const NavLinks = (props) => {
  return (
    <>
      <Link
        className={classes.Link}
        spy={true}
        to="hero"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Contact
      </Link>

      {/* <Link
        className={classes.Link}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Skills
      </Link> */}
      <Link
        className={classes.Link}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Projects
      </Link>

      {/* <Link
        className={classes.Link}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Blog
      </Link>
      <Link
        className={classes.Link}
        spy={true}
        to="project-section"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={props.closeDrawer}
      >
        Contact
      </Link> */}
    </>
  );
};
export default NavLinks;
