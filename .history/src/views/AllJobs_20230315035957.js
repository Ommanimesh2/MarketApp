import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Jobviewcard from '../components/Jobviewcard'
import ScreenWrapper from '../components/ScreenWrapper'

const AllJobs = () => {
  return (
   <View style={styles.jobswrapper}> 
    <Jobviewcard/>
  <Jobviewcard/>
   </View>
 
  )
}

export default AllJobs

const styles=StyleSheet.create({
  jobswrapper:{
      display:'flex',
     flex:1,
     flexDirection:'row',
  }

})