import React, { Fragment, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import { createPortal } from "react-dom";
import useInput from "../../../hooks/useInput";

import classes from "./ReservForm.module.css";

const Reservation = (props) => {
  const [confirmMessage, setConfirmedMessage] = useState(false);
  const {
    inputValue: firstNameValue,
    inputIsValid: firstNameIsValid,
    inputIsInvalid: firstNameIsInvalid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputTouched: firstNameTouched,
    resetValues: resetFirstNameValues,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: lastNameValue,
    inputIsValid: lastNameIsValid,
    inputIsInvalid: lastNameIsInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputTouched: lastNameTouched,
    resetValues: resetLastNameValues,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: emailValue,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputTouched: emailTouched,
    resetValues: resetEmailValues,
  } = useInput((value) => value.includes("@"));

  const {
    inputValue: phoneValue,
    inputIsValid: phoneIsValid,
    inputIsInvalid: phoneIsInvalid,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    inputTouched: phoneTouched,
    resetValues: resetPhoneValues,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: dateValue,
    inputIsValid: dateIsValid,
    inputIsInvalid: dateIsInvalid,
    inputChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    inputTouched: dateTouched,
    resetValues: resetDateValues,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: barberValue,
    inputChangeHandler: barberChangeHandler,
    resetValues: resetBarberValues,
  } = useInput(() => {});

  const submitHandler = (event) => {
    event.preventDefault();

    firstNameTouched();
    lastNameTouched();
    emailTouched();
    phoneTouched();
    dateTouched();

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

    const inputValues = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phone: phoneValue,
      date: dateValue,
      barber: barberValue,
    };

    props.onCustomerValues(inputValues);
    resetFirstNameValues();
    resetLastNameValues();
    resetEmailValues();
    resetPhoneValues();
    resetDateValues();
    resetBarberValues();
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
                  value={firstNameValue}
                  className={firstNameClasses}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
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
                  value={lastNameValue}
                  className={lastNameClasses}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
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
                  value={emailValue}
                  className={emailClasses}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
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
                  value={phoneValue}
                  className={phoneClasses}
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
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
                  value={dateValue}
                  className={dateClasses}
                  onChange={dateChangeHandler}
                  onBlur={dateBlurHandler}
                />
              </div>
              <div className={classes["label-box"]}>
                <label htmlFor="barber-select" className={classes.label}>
                  Holič
                </label>
                <select
                  name="barber"
                  id="barber-select"
                  value={barberValue}
                  className={classes.select}
                  onChange={barberChangeHandler}
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
