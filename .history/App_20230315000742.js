import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { Context } from './src/context/Context'
import Login from './src/views/Login'
import { ContextProvider } from './src/context/Context'

const App = () => {
  return (
    <ContextProvider>

    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <Login/>
    </NavigationContainer>
    </ContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})