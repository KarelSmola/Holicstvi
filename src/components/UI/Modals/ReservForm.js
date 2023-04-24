import React, { Fragment, useState } from "react";
import { createPortal } from "react-dom";

import classes from "./ReservForm.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  barber: "",
};

const Reservation = (props) => {
  const [enteredValue, setEnteredValue] = useState(initialState);

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEnteredValue({ ...enteredValue, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputValues = enteredValue;

    props.onCustomerValues(inputValues);
    setEnteredValue(initialState);
  };

  const formClasses = [
    classes.form,
    props.show === "entering"
      ? classes.formOpen
      : props.show === "exiting"
      ? classes.formClose
      : null,
  ];

  const textBoxClasses = [
    classes["confirm-message"],
    props.showConfirm === "entering"
      ? classes.showConfirmMessage
      : props.showConfirm === "exiting"
      ? classes.hideConfirmMessage
      : null,
  ];

  let modalContent = props.confirm ? (
    <div className={textBoxClasses.join(" ")}>
      <h1 className={classes["reserv-title"]}>Rezervace proběhla úspěšně</h1>
    </div>
  ) : (
    <form className={formClasses.join(" ")} onSubmit={submitHandler}>
      <div className={classes["label-box"]}>
        <label htmlFor="firstName" className={classes.label}>
          Jméno
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={enteredValue.firstName}
          className={classes.input}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={classes["label-box"]}>
        <label htmlFor="lastName" className={classes.label}>
          Příjmení
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={enteredValue.lastName}
          className={classes.input}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={classes["label-box"]}>
        <label htmlFor="email" className={classes.label}>
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={enteredValue.email}
          className={classes.input}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={classes["label-box"]}>
        <label htmlFor="phone" className={classes.label}>
          Telefon
        </label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={enteredValue.phone}
          className={classes.input}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={classes["label-box"]}>
        <label htmlFor="date" className={classes.label}>
          Datum
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={enteredValue.date}
          className={classes.input}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={classes["label-box"]}>
        <label htmlFor="barbers-select" className={classes.label}>
          Holič
        </label>
        <select
          name="barbers"
          id="barbers-select"
          value={enteredValue.barber}
          className={classes.select}
          onChange={inputChangeHandler}
        >
          <option value="random">Je mi to jedno</option>
          <option value="Jaromir">Jaromír</option>
          <option value="Karel">Karel</option>
          <option value="Michal">Michal</option>
        </select>
      </div>
      <div className={classes["order-btn-box"]}>
        <button
          className={classes["order-btn"]}
          onClick={props.onCloseReservForm}
        >
          Cancel
        </button>
        <button className={classes["order-btn"]} type="submit">
          Objednat
        </button>
      </div>
    </form>
  );

  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <div>{modalContent}</div>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Reservation;
