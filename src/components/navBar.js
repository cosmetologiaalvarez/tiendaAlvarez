import React from 'react';
import './navBar.css';
import Grid from '@material-ui/core/Grid';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Grid container className="navBarContent" alignItems="center">
            <Grid container className="navBarItem" item xs={2}>
                <a style={{color: "white"}} href='/'>Brand</a>
            </Grid>
            <Grid container className="navBarItem" item xs={2}>
                <a href="#">Shop</a>
            </Grid>
            <Grid container className="navBarItem" item xs={2}>
                <a href="#">Us</a>
            </Grid>
            <Grid container className="navBarItem" item xs={2}>
                <a href="#">Gallery</a>
            </Grid>
            <Grid item xs={2}><CartWidget/></Grid>
        </Grid>
    );
};

export default NavBar;