import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import ItemList from './ItemList';
import Category from './Category';
import {getCollection} from '../utils/getCollection';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        getCollection('items')
            .then(response => {
                setProductos(response)
            })
            .catch(error => setProductos([]))
    }, [])

    const productsFiltered = categoryId != null ? productos.filter(current => current.category == categoryId) : productos;

    return <>
        <Category prod={productos} selected={categoryId}/>
        <ItemList prod={productsFiltered}/>
    </>
}

export default ItemListContainer;