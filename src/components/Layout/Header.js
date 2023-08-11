import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";

const Header = (props) => {
  return(
    <Fragment>
        <header className={classes.header}>
            <h1>Plate Pal</h1>
            <HeaderCartButton onClick={props.onShownCart} />
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="Delicious Food"/>
        </div>
    </Fragment>
  )   
};

export default Header;
