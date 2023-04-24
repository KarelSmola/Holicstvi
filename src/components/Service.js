import React from "react";

import classes from "./Service.module.css";

const Service = ({ title, text, time, price }) => {
  return (
    <div className={classes["service-box"]}>
      <h2 className={classes["service-title"]}>{title}</h2>
      <p className={classes["service-text"]}>{text}</p>
      <p className={classes["service-time"]}>{time} min</p>
      <p className={classes["service-price"]}>{price} Kč</p>
    </div>
  );
};

export default Service;
