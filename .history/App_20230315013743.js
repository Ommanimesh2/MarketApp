import { NativeRouter,StyleSheet, Text, View,Route } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { Context } from './src/context/Context'
import Login from './src/views/Login'
import { ContextProvider } from './src/context/Context'

const App = () => {

  const Stack = createNativeStackNavigator();

 return (
    <ContextProvider>

    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
    </ContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})