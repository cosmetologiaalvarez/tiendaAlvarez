import React, {useContext, useState} from 'react';
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext';
import {Card, CardContent, Button} from '@mui/material';
import { useHistory } from "react-router-dom"
import isEmpty from 'lodash/isEmpty';

const ItemDetail = (props) => {
    const [countState, setCountState] = useState(1)
    
    const history = useHistory();
    
    const cartHook = useContext(CartContext);

    const addItem = () => {
        if (props.item.stock > countState) {
            setCountState(countState + 1)
        }
    }

    const removeItem = () => {
        if (countState > 0) {
            setCountState(countState - 1)
        }
    }

    const goToCart = () => {
        history.push("/cart")
    }

    const addToCart = (item) => {
        cartHook.addItem(item, countState)
    }

    const clearCart = (item) => {
        cartHook.clearCart()
    }

    return <>
        <Card className='CardRoot' sx={{ maxWidth: 400 }} style={{alignItems:"center"}}>
            <CardContent>
                <h2>{props.item.name}</h2>
                <h3>{props.item.descripcion}</h3>
                <ItemCount stock={props.item.stock} addItem={addItem} removeItem={removeItem} amount={countState}/>
            </CardContent>
        </Card>
        <Button variant="contained" color="primary" size="small" onClick={()=> {addToCart(props.item)}}>Agregar a Carrito</Button>
        {!isEmpty(cartHook.cartState) && (<Button variant="contained" color="primary" size="small" onClick={()=> {goToCart()}}>Finalizar Compra</Button>)}
    </>
}

export default ItemDetail;