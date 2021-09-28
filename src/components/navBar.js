import React from 'react';
import './navBar.css';
import Grid from '@material-ui/core/Grid';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Grid container className="navBarContent" alignItems="center">
            <Grid container className="navBarItem" item xs={1}>
                <a style={{color: "white"}} href='/'>Brand</a>
            </Grid>
            <Grid container className="navBarItem" item xs={3}>
                <a href="#">Shop</a>
            </Grid>
            <Grid container className="navBarItem" item xs={4}>
                <a href="#">Us</a>
            </Grid>
            <Grid container className="navBarItem" item xs={3}>
                <a href="/cart">Cart</a>
            </Grid>
            <Grid item xs={1}><CartWidget/></Grid>
        </Grid>
    );
};

export default NavBar;