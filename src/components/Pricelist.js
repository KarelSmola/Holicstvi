import React from "react";

import classes from "./Pricelist.module.css";

const Pricelist = () => {
  return (
    <div className={classes.pricelist} id="price">
      <h1 className={classes.title}>Ceník</h1>
      <div className={classes["service-box"]}>
        <h2 className={classes["service-title"]}>Střih vlasů</h2>
        <p className={classes["service-text"]}>
          Střih vlasů, zaholení kontur, úprava obočí, mytí vlasů, masáž hlavy,
          styling
        </p>
        <p className={classes["service-time"]}>45 - 60 min</p>
        <p className={classes["service-price"]}>610 Kč</p>
      </div>

      <div className={classes["service-box"]}>
        <h2 className={classes["service-title"]}>
          Střih vlasů + holení / úprava vousů
        </h2>
        <p className={classes["service-text"]}>
          Střih vlasů, zaholení kontur, úprava obočí, mytí vlasů, masáž hlavy,
          styling + holení dohladka HOT TOWEL nebo zkrácení vousů se zaholením,
          ošetření pokožky po holení
        </p>
        <p className={classes["service-time"]}>60 min</p>
        <p className={classes["service-price"]}>940 Kč</p>
      </div>

      <div className={classes["service-box"]}>
        <h2 className={classes["service-title"]}>Střih vlasů strojkem</h2>
        <p className={classes["service-text"]}>
          Střih vlasů pouze strojkem, zaholení kontur, úprava obočí, mytí vlasů,
          masáž hlavy, styling
        </p>
        <p className={classes["service-time"]}>30 min</p>
        <p className={classes["service-price"]}>400 Kč</p>
      </div>

      <div className={classes["service-box"]}>
        <h2 className={classes["service-title"]}>
          Chlapecký střih vlasů (7 - 12 let)
        </h2>
        <p className={classes["service-text"]}>
          Střih vlasů, mytí vlasů, styling
        </p>
        <p className={classes["service-time"]}>30 min</p>
        <p className={classes["service-price"]}>500 Kč</p>
      </div>

      <div className={classes["service-box"]}>
        <h2 className={classes["service-title"]}>Holení / úprava vousů</h2>
        <p className={classes["service-text"]}>
          Holení dohladka HOT TOWEL nebo zkrácení vousů se zaholením, ošetření
          pokožky po holení
        </p>
        <p className={classes["service-time"]}>30 min</p>
        <p className={classes["service-price"]}>450 Kč</p>
      </div>
    </div>
  );
};

export default Pricelist;
