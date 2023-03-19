import { StyleSheet,Button, Text, View, ScrollView } from 'react-native'
import React from 'react'

import ScreenWrapper from '../components/ScreenWrapper'
import MachineCard from '../components/MachineCard'
import Jobviewcard from '../components/Jobviewcard'
const AllJobs = ({navigation}) => {
  return (
    <ScreenWrapper>
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.app}>
      <Jobviewcard src={require(`..//../assets/phone.png`)}/>

   </ScrollView>
   <View style={styles.button}>

     <Button onPress={()=>navigation.navigate('MyJobs')} color='#41543B'  title="Your Jobs"/>
   </View>
    </ScreenWrapper>
  )
}

export default AllJobs

const styles = StyleSheet.create({})