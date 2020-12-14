import React from "react";
import classes from "./Container.module.scss";
const Container = ({ children, ...props }) => {
  return (
    <div className={classes.container} {...props}>
      {children}
    </div>
  );
};

export default Container;
