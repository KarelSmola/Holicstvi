import React, { Fragment, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
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
  const [confirmMessage, setConfirmedMessage] = useState(false);

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

  const animationTiming = {
    enter: 1000,
    exit: 3000,
  };

  return (
    <Fragment>
      {createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={props.show}
          timeout={animationTiming}
          onEnter={() => {
            setConfirmedMessage(false);
          }}
          onExiting={() => {
            setConfirmedMessage(true);
          }}
          classNames={{
            enter: "",
            enterActive: classes.formBoxOpen,
            exit: "",
            exitActive: classes.formBoxClose,
          }}
        >
          <div className={classes["form-box"]}>
            <form className={classes.form} onSubmit={submitHandler}>
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

              <button className={classes["order-btn"]} type="submit">
                Objednat
              </button>

              {confirmMessage && props.validInput && (
                <p className={classes["confirm-order-message"]}>
                  Děkujeme za objednávku
                </p>
              )}
              {confirmMessage && !props.validInput && (
                <p className={classes["confirm-noOrder-message"]}>
                  Budeme se těšit příště.
                </p>
              )}
            </form>

            <button
              className={classes["cancel-btn"]}
              onClick={props.onCloseReservForm}
            >
              X
            </button>
          </div>
        </CSSTransition>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Reservation;
