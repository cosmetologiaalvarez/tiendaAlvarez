import React from 'react';
import ItemCount from './ItemCount';
import {Card, CardContent} from '@material-ui/core/';

const Item = (props) => {
    return <>
        <Card className='CardRoot'>
            <CardContent>
                <h2>{props.name}</h2>
                <h3>{props.descripcion}</h3>
                <ItemCount stock={props.stock}/>
            </CardContent>
        </Card>
    </>
}

export default Item;