import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/CartContext"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnBump, setBtnBump] = useState(false)

    const cartCtx = useContext(CartContext)

    const { items } = cartCtx

    const numberOfItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''} `

    useEffect(() => {
        if(items.length === 0) {
            return;
        }

        setBtnBump(true);

        const timer = setTimeout(() => {
            setBtnBump(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return(
        <button className={btnClasses} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;