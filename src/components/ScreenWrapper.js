import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenWrapper = () => {
  return (
    <View style={styles.screenWrapper}>
      <Text>ScreenWrapper</Text>
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    screenWrapper:{
        paddingTop:Platform.OS === 'ios' ? 60 : 0,
        paddingHorizontal:24,
        paddingBottom:32,
        backgroundColor:"red",
        minHeight:'100%',
    }
})