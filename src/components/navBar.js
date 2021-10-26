import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';
import {CartContext} from '../context/CartContext';
import isEmpty from 'lodash/isEmpty';
import Grid from '@mui/material/Grid';
import CartWidget from './CartWidget';

const NavBar = () => {
    const cartHook = useContext(CartContext);

    return (
        <Grid container className="navBarContent" alignItems="center">
            <Grid container className="navBarItem" item xs={1}>
                <Link to='/' style={{color: "white"}} >Brand</Link>
            </Grid>
            <Grid container className="navBarItem" item xs={3}>
                <Link to='/' >Home</Link>
            </Grid>
            <Grid container className="navBarItem" item xs={3}>
                <Link to='/cart' >Cart</Link>
            </Grid>
            <Grid item xs={1}>{!isEmpty(cartHook.cartState)  && <CartWidget/>}</Grid>
        </Grid>
    );
};

export default NavBar;