import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useHistory } from "react-router-dom"

const Item = (props) => {
    const history = useHistory();
    const verDetalle = (item) => {
        history.push("/item/"+item)
    }
    return <>
        <Card className='CardRoot'>
            <CardContent>
                <h2 style={{textAlign: 'center'}}>{props.name}</h2>
                <CardMedia
                    component="img"
                    height="190"
                    image={props.imagen}
                    alt={props.name}
                />
                <Button variant="contained" onClick={()=> {verDetalle(props.id)}} >Ver Detalle</Button>
            </CardContent>
        </Card>
    </>
}


export default Item;