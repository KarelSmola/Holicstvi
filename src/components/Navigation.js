import React from "react";

import Logo from "./UI/Icons/Logo";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <div className={classes["logo-box"]}>
        <Logo className={classes.logo} />
        <h1 className={classes["logo-title"]}>Holičství</h1>
      </div>
      <nav className={classes.nav}>
        <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]}>
            <a href="about">O nás</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="price">Ceník</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="order">Objednat</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
