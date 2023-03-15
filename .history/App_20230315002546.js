import { StyleSheet, Text, View,Route } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { Context } from './src/context/Context'
import Login from './src/views/Login'
import { ContextProvider } from './src/context/Context'
import CreateAccount from './src/views/CreateAccount'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <ContextProvider>

    <NativeR
<Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </ContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})