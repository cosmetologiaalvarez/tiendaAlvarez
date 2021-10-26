import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import isEmpty from 'lodash/isEmpty';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
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

    return <Box style={{ textAlign:'center'}}>
            {cartHook.cartState.map(product => {
                return (
                    <Grid container spacing={1} key={product.id} style={{ border: '1px dashed grey', margin:4, width:'99.4%' }}>
                        <Grid item  xs={2}>
                            <b>Detalle de Producto</b>
                        </Grid>
                        <Grid item  xs={4}>
                            {product.name}
                        </Grid>
                        <Grid item  xs={2}>
                            {product.cantidad} unidades
                        </Grid>
                        <Grid item  xs={2}>
                            ${product.precio}
                        </Grid>
                        <Grid item  xs={2}>
                            <IconButton aria-label="delete" size="small">
                                <RemoveCircleIcon fontSize="inherit"size="small" onClick={()=> { cartHook.removeItem(product) }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                )
            })}
            <Grid container spacing={1} justifyContent="center" style={{ marginTop:'3em' }}>
                <Grid item  xs={3}>
                    <Button variant="contained" color="secondary" size="small" onClick={()=> {cartHook.clearCart()}}>Vaciar carrito</Button>
                </Grid>
                <Grid item  xs={2.5}>
                    <Button variant="contained" color="secondary" size="small" onClick={()=> {sendOrder()}}>Finalizar compra</Button>
                </Grid>
                <Grid item  xs={6.5}>
                    <div>Total:  ${totalProduct}</div>
                </Grid>
            </Grid>
        </Box>
}

export default Cart
