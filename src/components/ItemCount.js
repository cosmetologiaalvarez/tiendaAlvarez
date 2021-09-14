import React, { useState } from "react";
import './ItemCount.css';
import {Button, TextField, Card, CardContent} from '@material-ui/core/';

const ItemCount = (props) => {
    const [state, setState] = useState(0)

    const addItem = () => {
        if (props.stock > state) {
            setState(state + 1)
        }
    }

    const removeItem = () => {
        if (state > 0) {
            setState(state - 1)
        }
    }

    return <>
        <Card className='CardRoot' >
            <CardContent>
                <h3 className="CardTitle">{props.name}</h3>
                <p className="CardTitle">Disponibilidad {props.stock}</p>
                <TextField size="small" disabled value={state}></TextField>
                <Button variant="contained" color="secondary" size="small" className="CardButton" onClick={removeItem}>-</Button>
                <Button variant="contained" color="primary" size="small" className="CardButton" onClick={addItem} > +</Button>
            </CardContent>
        </Card>
    </>
}

export default ItemCount;