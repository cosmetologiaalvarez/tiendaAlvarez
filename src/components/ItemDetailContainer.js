import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const itemDetails = [
    {id: 1, name:'Producto 1', stock:1, descripcion: 'Descripcion del producto'},
    {id: 2, name:'Producto 2', stock:12, descripcion: 'Descripcion del producto'},
    {id: 3, name:'Producto 3', stock:8, descripcion: 'Descripcion del producto'}
];


const getItemDetails = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {resolve(itemDetails)}, 2000)
    })
}

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])

    useEffect(() => {
        getItemDetails().then(response => {
            setItemDetail(response)
        }).catch(error => setItemDetail([]))
    }, [])

    return <>
        <ItemDetail item={itemDetail}/>
    </>
}

export default ItemDetailContainer;