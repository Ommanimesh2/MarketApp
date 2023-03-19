import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Jobviewcard from '../components/Jobviewcard'

const MyJobs = () => {
  return (
    <ScreenWrapper>
      <ScrollView>
      <Jobviewcard src={require(`..//../assets/delete.png`)}/>
      <Jobviewcard src={require(`..//../assets/delete.png`)}/>
      <Jobviewcard src={require(`..//../assets/delete.png`)}/>
      <Jobviewcard src={require(`..//../assets/delete.png`)}/>
      <Jobviewcard src={require(`..//../assets/delete.png`)}/>
      <Jobviewcard src={require(`..//../assets/delete.png`)}/>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default MyJobs

const styles = StyleSheet.create({

  
})