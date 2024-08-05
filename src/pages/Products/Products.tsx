import {Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./Products.style"
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Products({navigation}) {
    const API_URL= "https://fakestoreapi.com/products"
    
    const {loading, resultData, error} = useFetch(API_URL)

    const handleDetail = (id) => {
        navigation.navigate("Detail", {id})
    }

    const renderProduct = ({item}) => 
        <ProductCard product={item} onSelect={() => handleDetail(item.id)}/>
    if (loading){
        return (
            <Loading/>
        )}
    if (error){
        return (
            <Error/>
            
        )}
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={resultData} renderItem={renderProduct}/>
        </SafeAreaView>
        )

}

