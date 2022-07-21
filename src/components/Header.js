import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImg from "../Assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className=" ">React Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img
          alt=""
          className=""
          src={mealImg}
        ></img>
      </div>
    </Fragment>
  );
}
