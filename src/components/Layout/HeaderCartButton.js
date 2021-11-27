import React,{useContext,useEffect,useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = props =>{
    const [bump,setBump] = useState(false)
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce((current,item)=>{
        return current + item.amount;
    },0)
    const btnClasses = `${classes.button} ${bump?classes.bump:''}`

    useEffect(()=>{
        if(items.length === 0) return;
        setBump(true)
        
        const timer = setTimeout(()=>{
            setBump(false)
        },300)
        return ()=>{
            clearTimeout(timer)
        }
    },[items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;