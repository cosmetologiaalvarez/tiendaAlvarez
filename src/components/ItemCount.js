import React from "react";
import './ItemCount.css';
import {Button, TextField} from '@mui/material';

const ItemCount = (props) => {
    return <div className="itemCountCard">
        <p className="CardTitle">Disponibilidad {props.stock}</p>
        <TextField size="small" sx={{ maxWidth: 90 }} disabled value={props.amount}></TextField>
        <Button variant="contained" color="secondary" size="small" className="CardButton" onClick={props.removeItem}>-</Button>
        <Button variant="contained" color="primary" size="small" className="CardButton" onClick={props.addItem} >+</Button>
    </div>
}

export default ItemCount;