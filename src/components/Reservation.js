import React from "react";

import classes from "./Reservation.module.css";

const Reservation = () => {
  return (
    <form className={classes.form}>
      <div className={classes["label-box"]}>
        <label htmlFor="firstName" className={classes.label}>
          Jméno
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className={classes.input}
        />
      </div>
      <div className={classes["label-box"]}>
        <label htmlFor="surname" className={classes.label}>
          Příjmení
        </label>
        <input
          type="text"
          id="surname"
          name="surname"
          className={classes.input}
        />
      </div>
      <div className={classes["label-box"]}>
        <label htmlFor="barbers-select" className={classes.label}>
          Holič
        </label>
        <select name="barbers" id="barbers-select" className={classes.select}>
          <option value="">Ke komu</option>
          <option value="does-not-metter">Je mi to jedno</option>
          <option value="Jaromir">Jaromír</option>
          <option value="Karel">Karel</option>
          <option value="Michal">Michal</option>
        </select>
      </div>
      <button>Rezervace</button>
    </form>
  );
};

export default Reservation;
