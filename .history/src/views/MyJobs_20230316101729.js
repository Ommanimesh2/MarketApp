import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Jobviewcard from '../components/Jobviewcard'


const MyJobs = () => {
  return (
    <ScreenWrapper>
      <View>
     <Jobviewcard/>
      </View>
    </ScreenWrapper>
  )
}

export default MyJobs

const styles = StyleSheet.create({

  
})