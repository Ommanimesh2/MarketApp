import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { Context } from './src/context/Context'
import { ContextProvider } from './src/context/Context'

const App = () => {
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