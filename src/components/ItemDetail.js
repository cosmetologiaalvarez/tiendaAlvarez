import React from 'react';
import ItemCount from './ItemCount';
import {Card, CardContent, Button} from '@material-ui/core/';
import { useHistory } from "react-router-dom"

const ItemDetail = (props) => {
    const history = useHistory();
    const goToCart = () => {
        history.push("/cart")
    }
    return <>
        <Card className='CardRoot'>
            <CardContent>
                <h2>{props.item.name}</h2>
                <h3>{props.item.descripcion}</h3>
                <ItemCount stock={props.item.stock}/>
            </CardContent>
        </Card>
        <Button variant="contained" color="primary" size="medium" onClick={()=> {goToCart()}}>Finalizar Compra</Button>
    </>
}

export default ItemDetail;