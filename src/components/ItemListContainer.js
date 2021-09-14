import React from 'react';
import ItemCount from './ItemCount';
import Grid from '@material-ui/core/Grid';

const products = [
    {name:'Producto 1', stock:1},
    {name:'Producto 2', stock:12},
    {name:'Producto 3', stock:8}
];

const ItemListContainer = (props) => {
    return <>
        <h2>{props.greeting}</h2>
        <Grid container>
            {products.map(product => {
                return <Grid item xs={4} key={product.name}>
                    <ItemCount {...product}/>
                </Grid>
            })}
        </Grid>
    </>
}

export default ItemListContainer;