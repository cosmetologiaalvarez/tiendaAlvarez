import React from 'react';
import {Card, CardContent, Button} from '@mui/material';
import { useHistory } from "react-router-dom"

const Item = (props) => {
    const history = useHistory();
    const verDetalle = (item) => {
        history.push("/item/"+item)
    }
    return <>
        <Card className='CardRoot'>
            <CardContent>
                <h2>{props.name}</h2>
                <Button variant="contained" onClick={()=> {verDetalle(props.id)}} >Ver Detalle</Button>
            </CardContent>
        </Card>
    </>
}


export default Item;