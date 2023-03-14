import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const Login = ({navigation}) => {
  return (
    <ScreenWrapper>

    <View >
      <Button title='thi' onPress={()=>navigation.navigate("h")}></Button>
      <Text>Login</Text>
    </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})