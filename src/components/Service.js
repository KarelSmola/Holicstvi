import React, { useState } from "react";

import classes from "./Service.module.css";

const Service = ({ title, text, time, price }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore((prevShow) => !prevShow);
  };

  return (
    <div className={classes["service-box"]}>
      <h2 className={classes["service-title"]}>{title}</h2>
      <button onClick={toggleMore}>Více</button>
      {showMore && (
        <div className={classes["more-box"]}>
          <p className={classes["service-text"]}>{text}</p>
          <p className={classes["service-time"]}>{time} min</p>
        </div>
      )}

      <p className={classes["service-price"]}>{price} Kč</p>
    </div>
  );
};

export default Service;
