import React from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';

const ItemList = (props) => {
    return <>
        <Grid container>
            {props.prod.map(product => {
                return <Grid item xs={4} key={product.id}>
                    <Item {...product}/>
                </Grid>
            })}
        </Grid>
    </>
}

export default ItemList;