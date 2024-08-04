import {Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./Products.style"
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

export default function Products() {
    const [productData, setProductData] = useState([]);
    const API_URL= "https://fakestoreapi.com/products"
    useEffect(() =>{
        fetchData()
    }, []) 

    const fetchData = async() => {
        const {data} = await axios.get(API_URL)
        setProductData(data)
    }
    const renderProduct = ({item}) => <ProductCard product={item}/>
    return (
        <View>
        <FlatList data={productData} renderItem={renderProduct}/>
        </View>
    )
}

