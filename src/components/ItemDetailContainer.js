import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';
import isEmpty from 'lodash/isEmpty';
import CircularProgress from '@mui/material/CircularProgress';
import find from 'lodash/find';
import {getCollection} from '../utils/getCollection';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getCollection('items').then(response => {
            setItemDetail(find(response, current => current.id == id));
        }).catch(error => setItemDetail([]))
    }, [])

    return !isEmpty(itemDetail) ? <div style={{textAlign:'center'}}><ItemDetail item={itemDetail}/></div> : <CircularProgress/>
}

export default ItemDetailContainer;