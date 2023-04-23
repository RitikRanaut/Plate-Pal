import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton =(props)=>{
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Order
            </span>
            <span className={classes.badge}>4</span>
        </button>
    )
};

export default HeaderCartButton;