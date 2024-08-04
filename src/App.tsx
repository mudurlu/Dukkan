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
        <Stack.Screen name='ProductPage' component={Products}/>
        <Stack.Screen name='Detail' component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
