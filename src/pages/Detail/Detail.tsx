import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./Detail.style"
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

export default function Detail({route}) {
  const API_URL= "https://fakestoreapi.com/products"
  const {id} = route.params
  const {loading, error, resultData} = useFetch(`${API_URL}/${id}`)
  const satinAl = () => {

  }
  if (loading){
    return (
        <Loading/>
    )}
if (error){
    return (
        <Error/>
        
    )}
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:resultData.image}}/>
      <View style={styles.body_container}>
        <Text style={styles.title}>{resultData.title}</Text>
        <Text style={styles.desc}>{resultData.description}</Text>
        <View style={styles.priceAndCountContainer}>
          <Text style={styles.price}>{resultData.price} TL</Text>
          <Text style={styles.count}>Stok Adedi: {resultData.rating.count}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={satinAl}>
        <Text style={styles.buttonText}>SATIN AL</Text>
      </TouchableOpacity>
    </View>
  )
}