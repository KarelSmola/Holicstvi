import React from "react";

import Logo from "./UI/Icons/Logo";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <Logo className={classes.logo} />
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
