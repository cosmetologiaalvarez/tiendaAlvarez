import React from 'react';
import {Card, CardContent} from '@material-ui/core/';
import ItemCount from './ItemCount';

const Item = (props) => {
    return <>
        <Card className='CardRoot'>
            <CardContent>
                <h2>{props.name}</h2>
                <ItemCount stock={props.stock}/>
            </CardContent>
        </Card>
    </>
}

export default Item;