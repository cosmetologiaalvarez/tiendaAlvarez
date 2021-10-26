import React, {useContext, useState} from 'react';
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useHistory } from "react-router-dom"
import isEmpty from 'lodash/isEmpty';
import IconButton from '@mui/material/IconButton';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
        <Card className='CardRoot' sx={{ maxWidth: 400 }} style={{textAlign:'center', display:'inline-block', padding:'8px'}}>
            <CardContent>
                <h2>{props.item.name}</h2>
                <CardMedia
                    component="img"
                    height="190"
                    image={props.item.imagen}
                    alt={props.item.name}
                />
                <p>{props.item.descripcion}</p>
                <ItemCount stock={props.item.stock} addItem={addItem} removeItem={removeItem} amount={countState}/>
            </CardContent>
            <IconButton>
                <AddShoppingCartIcon color="primary" size="small" onClick={()=> {addToCart(props.item)}}/>
            </IconButton>
            {!isEmpty(cartHook.cartState) && (
                <IconButton aria-label="delete" size="small">
                    <ShoppingCartSharpIcon color="primary" size="small" onClick={()=> {goToCart()}}/>
                </IconButton>
            )}
        </Card>
    </>
}

export default ItemDetail;