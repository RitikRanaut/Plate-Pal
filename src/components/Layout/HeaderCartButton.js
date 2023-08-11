import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";

const HeaderCartButton =(props)=>{

    const cartCtx = useContext(CartContext);

    const numberOfCartItem = cartCtx.items.reduce((curNumber, items) => {
        return curNumber + items.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Order
            </span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )
};

export default HeaderCartButton;