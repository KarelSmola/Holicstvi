import React from "react";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-text-box"]}>
        <h1 className={classes["hero-title"]}>
          Vítejte na stránkách rodinného SK holičství
        </h1>
        <p className={classes["hero-text"]}>
          Vasům se věnujeme od roku 1929. Naši historii začal psát náš děda
          Konrád Střihoruký, který si otevřel své první pánské holičství v Praze
          na Starém městě. My, jeho synové a vnuci v jeho odkazu pokračujeme a
          dbáme na hodnoty, které náš děděček stanovil. Pečlivost, spolehlivost,
          spokojenost klientů.
        </p>
      </div>
    </div>
  );
};

export default Hero;
