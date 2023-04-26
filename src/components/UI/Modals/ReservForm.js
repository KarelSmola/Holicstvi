import React, { Fragment, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import { createPortal } from "react-dom";

import classes from "./ReservForm.module.css";

const initialEnteredValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  barber: "",
};

const initialBlurValues = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  date: false,
  barber: false,
};

const Reservation = (props) => {
  const [enteredValue, setEnteredValue] = useState(initialEnteredValues);
  const [confirmMessage, setConfirmedMessage] = useState(false);
  const [isTouched, setIsTouched] = useState(initialBlurValues);

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEnteredValue({ ...enteredValue, [name]: value });
  };

  const { firstName, lastName, email, phone, date } = isTouched;

  const inputBlurHandler = (event) => {
    const name = event.target.name;

    setIsTouched({ ...isTouched, [name]: true });
  };

  const firstNameIsValid = enteredValue.firstName.trim().length > 0;
  const firstNameIsInvalid = firstName && !firstNameIsValid;

  const lastNameIsValid = enteredValue.lastName.trim().length > 0;
  const lastNameIsInvalid = lastName && !lastNameIsValid;

  const emailIsValid = enteredValue.email.trim().includes("@");
  const emailIsInvalid = email && !emailIsValid;

  const checkIfNumber = !isNaN(enteredValue.phone);
  const phoneIsValid = checkIfNumber && enteredValue.phone.trim().length > 0;
  const phoneIsInvalid = phone && !phoneIsValid;

  const dateIsValid = checkIfNumber && enteredValue.date.trim().length > 0;
  const dateIsInvalid = date && !dateIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    const inputValues = enteredValue;

    if (
      !firstNameIsValid ||
      !lastNameIsValid ||
      !emailIsValid ||
      !phoneIsValid ||
      !dateIsValid
    ) {
      console.log("Invalid input");
      return;
    }

    props.onCustomerValues(inputValues);
    setEnteredValue(initialEnteredValues);
    setIsTouched(initialBlurValues);
  };

  const animationTiming = {
    enter: 1000,
    exit: 3000,
  };

  const inValidClass = `${classes.input} ${classes.invalid}`;
  const validClass = `${classes.input}`;

  const firstNameClasses = firstNameIsInvalid ? inValidClass : validClass;
  const lastNameClasses = lastNameIsInvalid ? inValidClass : validClass;
  const emailClasses = emailIsInvalid ? inValidClass : validClass;
  const phoneClasses = phoneIsInvalid ? inValidClass : validClass;
  const dateClasses = dateIsInvalid ? inValidClass : validClass;

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
                  className={firstNameClasses}
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
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
                  className={lastNameClasses}
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
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
                  className={emailClasses}
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
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
                  className={phoneClasses}
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
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
                  className={dateClasses}
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
                />
              </div>
              <div className={classes["label-box"]}>
                <label htmlFor="barber-select" className={classes.label}>
                  Holič
                </label>
                <select
                  name="barber"
                  id="barber-select"
                  value={enteredValue.barber}
                  className={classes.select}
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
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
