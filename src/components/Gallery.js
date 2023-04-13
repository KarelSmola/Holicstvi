import React from "react";

import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <figure className={classes["img-box-1"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-01.jpg")}
          alt="Gallery-pic-1"
        />
      </figure>
      <figure className={classes["img-box-2"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-02.jpg")}
          alt="Gallery-pic-2"
        />
      </figure>
      <figure className={classes["img-box-3"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-03.jpg")}
          alt="Gallery-pic-3"
        />
      </figure>
      <figure className={classes["img-box-4"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-04.jpg")}
          alt="Gallery-pic-4"
        />
      </figure>
      <figure className={classes["img-box-5"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-05.jpg")}
          alt="Gallery-pic-5"
        />
      </figure>
      <figure className={classes["img-box-6"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-06.jpg")}
          alt="Gallery-pic-6"
        />
      </figure>
      <figure className={classes["img-box-7"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-07.jpg")}
          alt="Gallery-pic-7"
        />
      </figure>
      <figure className={classes["img-box-8"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-08.jpg")}
          alt="Gallery-pic-8"
        />
      </figure>
      <figure className={classes["img-box-9"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-09.jpg")}
          alt="Gallery-pic-9"
        />
      </figure>
      <figure className={classes["img-box-10"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-10.jpg")}
          alt="Gallery-pic-10"
        />
      </figure>
      <figure className={classes["img-box-11"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-11.jpg")}
          alt="Gallery-pic-11"
        />
      </figure>
      <figure className={classes["img-box-12"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-12.jpg")}
          alt="Gallery-pic-12"
        />
      </figure>
      <figure className={classes["img-box-13"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-13.jpg")}
          alt="Gallery-pic-13"
        />
      </figure>
      <figure className={classes["img-box-14"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-14.jpg")}
          alt="Gallery-pic-14"
        />
      </figure>
      <figure className={classes["img-box-15"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-15.jpg")}
          alt="Gallery-pic-15"
        />
      </figure>
      <figure className={classes["img-box-16"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-16.jpg")}
          alt="Gallery-pic-16"
        />
      </figure>
      <figure className={classes["img-box-17"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-17.jpg")}
          alt="Gallery-pic-17"
        />
      </figure>
      <figure className={classes["img-box-18"]}>
        <img
          className={classes.img}
          src={require("../img/gallery-pic-18.jpg")}
          alt="Gallery-pic-18"
        />
      </figure>
    </div>
  );
};

export default Gallery;
