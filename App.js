import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { Context } from './src/context/Context'
import { ContextProvider } from './src/context/Context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/views/Login'
import CreateAccount from './src/views/CreateAccount'

const App = () => {

  const Stack = createNativeStackNavigator();

 return (
    <ContextProvider>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={CreateAccount} />
        <Stack.Screen name="MainScreens" component={Routes}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})