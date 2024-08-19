import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';



const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: "white", headerStyle: { backgroundColor: "cornflowerblue" } }}>
        <Stack.Screen name='Login' component={Login} options={{
          title: "Dükkan", headerShown: false
        }} />
        <Stack.Screen name='ProductPage' component={Products} options={{
          title: "Dükkan",
        }} />
        <Stack.Screen name='Detail' component={Detail}
          options={{
            /*headerShown:false*/
            title: "Ürün",
            headerStyle: { backgroundColor: "cornflowerblue", },
            headerTintColor: "white"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
