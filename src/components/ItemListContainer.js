import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import ItemList from './ItemList';

const products = [
    {id: 1, name:'Producto 1', stock:1, descripcion: 'una descripcion del producto', categoryId: 1},
    {id: 2, name:'Producto 2', stock:12, descripcion: 'una descripcion del producto', categoryId: 2},
    {id: 3, name:'Producto 3', stock:8, descripcion: 'una descripcion del producto', categoryId: 1}
];

const fetchProductos = (idCategory) => {
    const filteredProduct = idCategory != null ? products.filter(current => current.categoryId == idCategory) : products
    return new Promise((resolve, reject) =>{
        setTimeout(() => {resolve(filteredProduct)}, 2000)
    })
}

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        fetchProductos(categoryId)
            .then(response => setProductos(response))
            .catch(error => setProductos([]))
    }, [])

    return <>
        <ItemList prod={productos}/>
    </>
}

export default ItemListContainer;