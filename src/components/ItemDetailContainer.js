import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';
import isEmpty from 'lodash/isEmpty';
import CircularProgress from '@mui/material/CircularProgress';

const itemDetails = [
    {id: 1, name:'Producto 1', stock:1, descripcion: 'Descripcion del producto', categoryId: 1, precio:120},
    {id: 2, name:'Producto 2', stock:12, descripcion: 'Descripcion del producto', categoryId: 2, precio:140},
    {id: 3, name:'Producto 3', stock:8, descripcion: 'Descripcion del producto', categoryId: 1, precio:190}
];

const findItem = id => itemDetails.find(current => current.id == id);

const getItemDetails = (id) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {resolve(
            findItem(id)
        )}, 2000)
    })
}

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getItemDetails(id).then(response => {
            setItemDetail(response)
        }).catch(error => setItemDetail([]))
    }, [])

    return !isEmpty(itemDetail) ? <ItemDetail item={itemDetail}/> : <CircularProgress/>
}

export default ItemDetailContainer;