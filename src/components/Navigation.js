import React, { Fragment, useState } from "react";
import Menu from "./UI/Icons/Menu";
import Logo from "./UI/Icons/Logo";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prevState) => !prevState);
  };

  const navClasses = mobileNav
    ? `${classes.navigation} ${classes.visible}`
    : `${classes.navigation}`;

  return (
    <Fragment>
      <button className={classes["mobile-nav"]} onClick={toggleMobileNav}>
        <Menu />
      </button>
      <div className={navClasses}>
        <div className={classes["logo-box"]}>
          <Logo className={classes.logo} />
        </div>
        <nav className={classes.nav}>
          <ul className={classes["nav-list"]}>
            <li className={classes["nav-item"]}>
              <a href="#about">O nás</a>
            </li>
            <li className={classes["nav-item"]}>
              <a href="#price">Ceník</a>
            </li>
            <li className={classes["nav-item"]} onClick={props.order}>
              <a href="order">Objednat</a>
            </li>
            <li className={classes["nav-item"]}>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;
