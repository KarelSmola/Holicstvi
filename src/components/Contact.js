import React from "react";
import Logo from "./UI/Icons/Logo";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <h1 className={classes.title}>Kontakt</h1>
      <Logo className={classes.logo} />
      <div className={classes["address-box"]}>
        <p>Zborovská 38, Praha 5</p>
        <a type="mail" href="mail">
          info@thholicstvi.cz
        </a>
        <a type="phone" href="phone">
          +420778553264
        </a>
      </div>
    </div>
  );
};

export default Contact;
