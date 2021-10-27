import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

const Category = (props) => {
    const history = useHistory();
    const verDetalle = (categoryId) => {
        history.push("/category/"+categoryId)
    }
    const categorias = props.prod.reduce((previous, current) => {
        if (previous.find(item => item == current.category)) return previous
        return [...previous, current.category]
    }, []);

    return <>
        <Grid container spacing={2} style={{padding:'2rem'}} justifyContent="center">
            {categorias.map(categoria => {
                return <Grid item xs={2} key={categoria}>
                    <Button variant="contained" disabled={categoria == props.selected} onClick={()=> {verDetalle(categoria)}}>Categoria {categoria}</Button>
                </Grid>
            })}
        </Grid>
    </>
}

export default Category;