import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const Login = () => {
  return (

<ScreenWrapper>

    <View>
    <Button title='thi' onPress={()=>navigation.navigate("h")}></Button>
      <Text>Login</Text>
    </View>
    </ScreenWrapper>
  )
}
;

export default Login

   


