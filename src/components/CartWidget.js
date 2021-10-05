import React, {useContext} from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import {CartContext} from '../context/CartContext';
import Badge from '@mui/material/Badge';

const CartWidget = () =>{
    const cartHook = useContext(CartContext);
    
    return (
        <div style={{ padding:8 }}>
            <Badge  badgeContent={cartHook.cartState.length}  color="primary">
                <ShoppingCartSharpIcon xs={8} color="primary"/>
            </Badge >
        </div>
    )
}

export default CartWidget;