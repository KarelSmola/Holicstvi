import { HiOutlineScissors } from "react-icons/hi";

import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes["logo-box"]}>
      <HiOutlineScissors className={`${classes.logo} ${props.className}`} />
      <h1 className={classes["logo-title"]}>KS Holičství</h1>
    </div>
  );
};

export default Logo;
