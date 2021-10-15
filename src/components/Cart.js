import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import isEmpty from 'lodash/isEmpty';
import Alert from '@mui/material/Alert';
import {setCollection} from '../utils/getCollection';

const Cart = () => {
    const cartHook = useContext(CartContext);
    let totalProduct = cartHook.cartState.reduce((total, product) => total + (product.precio * product.cantidad), 0);

    if (isEmpty(cartHook.cartState)) return <Alert severity="info">No hay productos en el carrito</Alert>

    const newOrder = {
        buyer: {name: "User", email: "user@mail.com"},
        item: cartHook.cartState.map(product => {
            return { item:product.name, quantity: product.cantidad }
        }),
        total: totalProduct
    }
    
    const sendOrder = () => {
        setCollection('orders', newOrder)
        cartHook.clearCart()
    }

    function Item(props) {
        const { sx, ...other } = props;
        return (
            <Box
            sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                p: 1,
                borderRadius: 1,
                textAlign: 'center',
                fontSize: 19,
                fontWeight: '600',
                ...sx,
            }}
            {...other}
            />
        );
    }

    return <Box>
        {cartHook.cartState.map(product => {
            return (
                <div style={{ width: '100%' }}>
                    <Box
                        sx={{
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 1,
                        padding: 1,
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        }}
                    >
                        <Item>{product.name}</Item>
                        <Item>{product.cantidad}</Item>
                        <Item>{product.precio}</Item>
                        <Item><Button variant="contained" color="secondary" onClick={() => cartHook.removeItem(product)}>Remove Item</Button></Item>
                    </Box>
                </div>
            )
        })}
        <Box
            sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: 1,
            gridTemplateColumns: 'repeat(2, 1fr)',
            }}
        >
            <Item>$ {totalProduct}</Item>
            <Item><Button variant="contained" color="secondary" size="small" onClick={()=> {sendOrder()}}>Finalizar compra</Button></Item>
        </Box>
    </Box>
}

export default Cart
