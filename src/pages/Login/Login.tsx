import { View, Text, Image, SafeAreaView} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./Login.style"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Formik } from 'formik'
export default function Login({navigation}) {
  

  const handleLogin = () => {
    navigation.navigate("ProductPage")
  }

  return (
    <SafeAreaView>
      <Image style={styles.image}source={require("./../../asset/shop.png")} />

      <Formik 
      initialValues={
        {userName: "", password: ""}}
        onSubmit={fromValues => console.log(fromValues)}>
      {({handleChange,handleSubmit, values}) =>(
      <View >
        <View style={styles.container}>

          <Input 
          placeholder={"Kullanıcı adınızı girin"} 
          onChange={handleChange("userName")}
          value={values.userName}/>

          <Input 
          placeholder={"Şifrenizi girin"} onChange={handleChange("password")}
          value={values.password}/>
        </View>
          <Button title={"Gir"} onPress={handleSubmit}/>
      </View>)}
      </Formik>
      
    </SafeAreaView>
  )
}