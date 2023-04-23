import React, { Fragment } from "react";

import classes from "./Confirm.module.css";

const Confirm = () => {
  return (
    <Fragment>
      <div className={classes.backdrop} />
      <div className={classes["text-box"]}>
        <h1 className={classes["reserv-title"]}>
          Rezervace <br /> proběhla <br />
          úspěšně
        </h1>
      </div>
    </Fragment>
  );
};

export default Confirm;
