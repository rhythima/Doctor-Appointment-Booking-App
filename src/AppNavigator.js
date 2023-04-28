import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './screens/Splash'
import Home from './screens/Home'
import BookAppointment from './screens/BookAppointment'
import Success from './screens/Success'
import Completed from './screens/Completed'
import Pending from './screens/Pending'
import CallAmb from './screens/CallAmb'

const AppNavigator = () => {
    const Stack=createStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='BookAppointment' component={BookAppointment} options={{headerShown:false}}/>
            <Stack.Screen name='Success' component={Success} options={{headerShown:false}}/>
            <Stack.Screen name='Pending' component={Pending} options={{headerShown:false}}/>
            <Stack.Screen name='Completed' component={Completed} options={{headerShown:false}}/>
            <Stack.Screen name='CallAmb' component={CallAmb} options={{headerShown:false}}/>
         </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator