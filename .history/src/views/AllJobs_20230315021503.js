import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const AllJobs = () => {
  return (
    <ScreenWrapper>
      <View style={styles.Jobcontainer}>
     
     </View>
    </ScreenWrapper>
  )
}

export default AllJobs

const styles = StyleSheet.create({
  Jobcontainer:{
    width:'108%',
    marginLeft:-12,
    height:'30%',
    backgroundColor: '#F9FCFE',
borderColor: '#E0E6EF',
borderRadius: 16,
  }
})