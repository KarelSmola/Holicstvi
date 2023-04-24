import React from "react";
import Service from "./Service";

import classes from "./Pricelist.module.css";

const serviceList = [
  {
    id: "s1",
    title: "Střih vlasů",
    text: "Střih vlasů, zaholení kontur, úprava obočí, mytí vlasů, masáž hlavy, styling.",
    time: { from: 45, to: 60 },
    price: 610,
  },
  {
    id: "s2",
    title: "Střih vlasů + holení / úprava vousů",
    text: "Střih vlasů, zaholení kontur, úprava obočí, mytí vlasů, masáž hlavy, styling + holení dohladka HOT TOWEL nebo zkrácení vousů se zaholením, ošetření pokožky po holení.",
    time: { from: 60, to: 60 },
    price: 940,
  },
  {
    id: "s3",
    title: "Střih vlasů strojkem",
    text: "Střih vlasů pouze strojkem, zaholení kontur, úprava obočí, mytí vlasů, masáž hlavy, styling.",
    time: { from: 30, to: 30 },
    price: 400,
  },
  {
    id: "s4",
    title: "Chlapecký střih vlasů (7 - 12 let)",
    text: "Střih vlasů, mytí vlasů, styling.",
    time: { from: 30, to: 30 },
    price: 500,
  },
  {
    id: "s5",
    title: "Holení / úprava vousů",
    text: "Holení dohladka HOT TOWEL nebo zkrácení vousů se zaholením, ošetření pokožky po holení.",
    time: { from: 30, to: 30 },
    price: 450,
  },
];

const Pricelist = () => {
  return (
    <div className={classes.pricelist} id="price">
      <h1 className={classes.title}>Ceník</h1>
      {serviceList.map((service) => {
        let finalTime;
        if (service.time.from === service.time.to) {
          finalTime = service.time.to;
        } else {
          finalTime = `${service.time.from} - ${service.time.to}`;
        }

        return (
          <Service
            key={service.id}
            title={service.title}
            text={service.text}
            time={finalTime}
            price={service.price}
          />
        );
      })}
    </div>
  );
};

export default Pricelist;
