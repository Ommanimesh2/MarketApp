import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import MapDrawer from '../components/MapDrawer'
const Login = ({navigation}) => {
  return (
    <ScreenWrapper>

    <View >
      <Button title='thi' onPress={()=>navigation.navigate("MainScreens")}></Button>
      <Text>Login</Text>
    </View>
    <MapDrawer/>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})