import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
const AddRentMachines = () => {
  return (
    <ScreenWrapper>
  <View style={styles.Addrentcontainer}>
  <Text style={styles.jobheader}>
    <Header text = "Add New Job"/> </Text> 
  </View>
  
    </ScreenWrapper>
  )
}

export default AddRentMachines

const styles = StyleSheet.create({

})