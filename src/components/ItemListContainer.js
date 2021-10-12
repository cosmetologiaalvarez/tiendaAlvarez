import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import ItemList from './ItemList';
import {getCollection} from '../utils/getCollection';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        getCollection('items')
            .then(response => {
                const products = categoryId != null ? response.filter(current => current.category == categoryId) : response
                setProductos(products)
            })
            .catch(error => setProductos([]))
    }, [])

    return <>
        <ItemList prod={productos}/>
    </>
}

export default ItemListContainer;