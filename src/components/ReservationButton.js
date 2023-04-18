import React from "react";

import classes from "./ReservationButton.module.css";

const ReservationButton = (props) => {
  return (
    <button
      className={classes["reservation-btn"]}
      onClick={props.onShowReservForm}
    >
      Rezervace
    </button>
  );
};

export default ReservationButton;
