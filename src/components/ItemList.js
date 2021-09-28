import React from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';

const ItemList = (props) => {
    return <>
        <Grid container spacing={2} style={{padding:'2rem'}} justifyContent="center">
            {props.prod.map(product => {
                return <Grid item xs={2} key={product.id}>
                    <Item {...product}/>
                </Grid>
            })}
        </Grid>
    </>
}

export default ItemList;