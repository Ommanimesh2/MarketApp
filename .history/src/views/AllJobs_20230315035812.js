import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Jobviewcard from '../components/Jobviewcard'
import ScreenWrapper from '../components/ScreenWrapper'

const AllJobs = () => {
  return (
   <View style={s}> 
    <Jobviewcard/>
  <Jobviewcard/>
   </View>
 
  )
}

export default AllJobs

