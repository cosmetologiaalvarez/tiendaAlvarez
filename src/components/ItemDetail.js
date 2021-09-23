import React from 'react';
import ItemCount from './ItemCount';
import {Card, CardContent} from '@material-ui/core/';

const ItemDetail = (props) => {
    return <>
        <Card className='CardRoot'>
            <CardContent>
                <h2>{props.item.name}</h2>
                <h3>{props.item.descripcion}</h3>
                <ItemCount stock={props.item.stock}/>
            </CardContent>
        </Card>
    </>
}

export default ItemDetail;