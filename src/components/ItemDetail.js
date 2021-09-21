import React from 'react';

const ItemDetail = (props) => {
    return <>
        {props.item.map(items => {
            return <h3>{items.descripcion}</h3>
        })}
    </>
}

export default ItemDetail;