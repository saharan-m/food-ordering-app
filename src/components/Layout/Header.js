import classes from './Header.module.css'
import {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>Mealsdelivery</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src = {mealsImage} alt='Delicious food!'></img>
        </div>
    </Fragment>
}

export default Header;