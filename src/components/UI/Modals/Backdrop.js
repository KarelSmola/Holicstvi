import React from "react";
import { Transition } from "react-transition-group";
import { createPortal } from "react-dom";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return createPortal(
    <Transition in={props.show} timeout={1000} mountOnEnter unmountOnExit>
      {(state) => {
        const backdropClasses = [
          classes.backdrop,
          state === "entering"
            ? classes.showBackdrop
            : state === "exiting"
            ? classes.hideBackdrop
            : null,
        ];

        return <div className={backdropClasses.join(" ")} />;
      }}
    </Transition>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
