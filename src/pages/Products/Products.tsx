import {Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./Products.style"
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

export default function Products() {
    const [data, setData] = useState([]);
    const API_URL= "https://fakestoreapi.com/products"
    useEffect(() =>{
        fetchData()
    }, []) 

    const fetchData = async() => {
        const {data: productData} = await axios.get(API_URL)
        setData(productData)
    }
    const renderProduct = ({item}) => <ProductCard product={item}/>
    return (
        <View>
        <FlatList data={data} renderItem={renderProduct}/>
        </View>
    )
}

