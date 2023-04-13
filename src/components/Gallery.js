import React from "react";

import classes from "./Gallery.module.css";

import pic1 from "../img/gallery-pic-01.jpg";
import pic2 from "../img/gallery-pic-02.jpg";

const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <img className={classes.img} src={pic1} alt="pic-1" />
      <img className={classes.img} src={pic2} alt="pic-2" />
    </div>
  );
};

export default Gallery;
