import React, { useState } from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Products from './pages/Products';
import Detail from './pages/Detail';



const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductPage' component={Products} options={{
          title : "Dükkan",
          headerStyle: {backgroundColor: "cornflowerblue"}, headerTintColor: "white"
        }}/>
        <Stack.Screen name='Detail' component={Detail} 
          options={{
            /*headerShown:false*/
            title : "Ürün",
            headerStyle: {backgroundColor: "cornflowerblue",},
            headerTintColor: "white"
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
