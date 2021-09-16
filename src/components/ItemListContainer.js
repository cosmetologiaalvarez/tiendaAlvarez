import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const products = [
    {id: 1, name:'Producto 1', stock:1, descripcion: 'una descripcion del producto'},
    {id: 2, name:'Producto 2', stock:12, descripcion: 'una descripcion del producto'},
    {id: 3, name:'Producto 3', stock:8, descripcion: 'una descripcion del producto'}
];

const fetchProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {resolve(products)}, 2000)
    })
}


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetchProductos().then(response => {setProductos(response)}).catch(error => setProductos([]))
    }, [])
    return <>
        <h2 style={{textAlign:"center"}}>{props.greeting}</h2>
        <ItemList prod={productos}/>
    </>
}

export default ItemListContainer;