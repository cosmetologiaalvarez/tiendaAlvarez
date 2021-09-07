import React from 'react';
import './navBar.css';
import Grid from '@material-ui/core/Grid';

const NavBar = () => {
    return (
        <Grid container className="navBarContent">
            <Grid container className="navBarItem" item xs={4}>
                <a href="#">Shop</a>
            </Grid>
            <Grid container className="navBarItem" item xs={4}>
                <a href="#">Us</a>
            </Grid>
            <Grid container className="navBarItem" item xs={4}>
                <a href="#">Gallery</a>
            </Grid>
        </Grid>
    );
};

export default NavBar;