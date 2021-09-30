import React from "react";
import './ItemCount.css';
import {Button, TextField} from '@material-ui/core/';

const ItemCount = (props) => {
    return <>
        <p className="CardTitle">Disponibilidad {props.stock}</p>
        <TextField size="small" disabled value={props.amount}></TextField>
        <Button variant="contained" color="secondary" size="small" className="CardButton" onClick={props.removeItem}>-</Button>
        <Button variant="contained" color="primary" size="small" className="CardButton" onClick={props.addItem} >+</Button>
    </>
}

export default ItemCount;