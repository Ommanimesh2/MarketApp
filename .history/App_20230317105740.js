import { NativeRouter,StyleSheet, Text, View,Route } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { Context } from './src/context/Context'
import Login from './src/views/Login'
import { ContextProvider } from './src/context/Context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateAccount from './src/views/CreateAccount'
import NewJob from './src/views/NewJob'
import AddStall from './src/views/AddStall'
import AddRentMachines from './src/views/AddRentMachines'
import MyRentMachines from './src/views/MyRentMachines'
import MyJobs from './src/views/MyJobs'
import MyStalls from './src/views/MyStalls'
import { useEffect,useState, useContext } from 'react'


const App = () => {
 
  const Stack = createNativeStackNavigator();

 return (
    <ContextProvider>

    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={CreateAccount} />
        <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>

        <Stack.Screen name="signup" component={CreateAccount} options={{headerShown: false}}/>
        <Stack.Screen name="MainScreens" component={Routes}/>
        <Stack.Screen name="MyJobs" component={MyJobs}/>
        <Stack.Screen name="NewJob" component={NewJob}/>
        <Stack.Screen name="AddStall" component={AddStall}/>
        <Stack.Screen name="AddRentMachines" component={AddRentMachines}/>
        <Stack.Screen name="MyStalls" component={MyStalls}/>
        <Stack.Screen name="MyRentMachines" component={MyRentMachines}/>        
      </Stack.Navigator>
    </NavigationContainer>
    </ContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})