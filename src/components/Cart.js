import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import isEmpty from 'lodash/isEmpty';
import Alert from '@mui/material/Alert';

const Cart = () => {
    const cartHook = useContext(CartContext);
    let totalProduct = cartHook.cartState.reduce((total, product) => total + (product.precio * product.cantidad), 0);

    if (isEmpty(cartHook.cartState)) return <Alert severity="info">No hay productos en el carrito</Alert>

    return <Box>
        {cartHook.cartState.map(product => {
            return (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.cantidad}</p>
                    <p>{product.precio}</p>
                    <Button onClick={() => cartHook.removeItem(product)}>Remove Item</Button>
                </div>
            )
        })}
        <h2>{totalProduct}</h2>
    </Box>
}

export default Cart
