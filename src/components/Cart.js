import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import isEmpty from 'lodash/isEmpty';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {setCollection, updateCollection} from '../utils/getCollection';

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
        setCollection('orders', newOrder);
        cartHook.clearCart();
    }

    return <Grid container style={{ textAlign:'center'}}>
            <Grid item xs={7}>
                {cartHook.cartState.map(product => {
                    return (
                        <Grid container spacing={1} key={product.id} style={{ border: '1px dashed purple', margin:'0.5rem', width:'97.4%' }}>
                            <Grid item  xs={3}>
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
                            <Grid item  xs={1}>
                                <IconButton aria-label="delete" size="small">
                                    <RemoveCircleIcon fontSize="inherit"size="small" onClick={()=> { cartHook.removeItem(product) }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid item xs={5}>
                <Grid container spacing={3} justifyContent="center" style={{ marginTop:'1px' }}>
                    <Grid item >
                        <div>Total:  ${totalProduct}</div>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" color="secondary" size="small" onClick={()=> {cartHook.clearCart()}}>Vaciar carrito</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" color="secondary" size="small" onClick={()=> {sendOrder()}}>Finalizar compra</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
}

export default Cart
