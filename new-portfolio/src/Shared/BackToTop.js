import React from "react";
import { Link } from "react-scroll";
import classes from "./BackToTop.module.scss";
import usePageOffset from "../Hooks/usePageOffset";

const BackToTop = () => {
  const windowSize = usePageOffset();
  return (
    <>
      <Link
        className={
          windowSize.y >= 800
            ? `${classes.BackToTopContainer} ${classes.Visible}`
            : `${classes.BackToTopContainer} `
        }
        spy={true}
        to="hero"
        smooth={true}
        duration={500}
        offset={-50}
      >
        <i
          style={{
            fontSize: "4rem",
          }}
          className={"fas fa-arrow-circle-up"}
        ></i>
      </Link>
    </>
  );
};

export default BackToTop;
