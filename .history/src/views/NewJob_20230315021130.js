import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const NewJob = () => {
  return (
    <ScreenWrapper>
     <View style={styles.Jobcontainer}>
     
      </View>
    </ScreenWrapper>
  )
}

export default NewJob

const styles = StyleSheet.create({
  Jobcontainer:{
    width:'80%',
    height:'40%',
    backgroundColor: '#F9FCFE;
border: 1px solid #E0E6EF;
border-radius: 16px;
  }
})