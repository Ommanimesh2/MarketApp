import { StyleSheet, Text,TextInput, View ,Pressable} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const NewJob = () => {
  return (
    <ScreenWrapper>
      <View style={styles.Addjobwrapper}>
      <View style={styles.header}>
        <Text> Add New Job </Text>
      </View>
      </View>
     
    </ScreenWrapper>
  )
}

export default NewJob

const styles = StyleSheet.create({
header:{
  backgroundColor:'#00AC00',
width:'100%',
height:48,
marginLeft:-22,
width:380,

}
})