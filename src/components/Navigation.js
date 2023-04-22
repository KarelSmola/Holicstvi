import React, { Fragment, useState } from "react";
import Logo from "./UI/Icons/Logo";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [crossMobileNav, setCrossMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prevState) => !prevState);
    setCrossMobileNav((prevCross) => !prevCross);
  };

  const navClasses = mobileNav
    ? `${classes.nav} ${classes.visible}`
    : `${classes.nav}`;

  const mobileNavClasses = crossMobileNav
    ? `${classes["mobile-nav"]} ${classes.cross}`
    : `${classes["mobile-nav"]}`;

  return (
    <Fragment>
      <div className={classes.navigation}>
        <div className={classes["logo-box"]}>
          <Logo className={classes.logo} />
        </div>
        <nav className={navClasses}>
          <ul className={classes["nav-list"]}>
            <li className={classes["nav-item"]} onClick={toggleMobileNav}>
              <a href="#about">O nás</a>
            </li>
            <li className={classes["nav-item"]} onClick={toggleMobileNav}>
              <a href="#price">Ceník</a>
            </li>
            <li className={classes["nav-item"]} onClick={props.order}>
              <a href="order">Objednat</a>
            </li>
            <li className={classes["nav-item"]} onClick={toggleMobileNav}>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
          <button className={mobileNavClasses} onClick={toggleMobileNav}>
            <div className={classes.menu} />
          </button>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;
