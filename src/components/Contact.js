import React from "react";
import Logo from "./UI/Icons/Logo";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contact} id="contact">
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
      <div className={classes["opening-hours"]}>
        <h2 className={classes["open-hours-title"]}>Otevírací doba</h2>
        <ul className={classes["open-hours-list"]}>
          <li>PO 9 - 19</li>
          <li>ÚT 9 - 19</li>
          <li>ST 9 - 19</li>
          <li>ČT 9 - 19</li>
          <li>PÁ 9 - 19</li>
          <li>SO Zavřeno</li>
          <li>NE Zavřeno</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
