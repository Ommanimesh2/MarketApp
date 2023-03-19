import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import StallCard from '../components/StallCard'
const MyStalls = () => {
  return (
    <ScreenWrapper>
      <StallCard/>
      <StallCard/>
      <StallCard/>
      <StallCard/>
      <StallCard/>
      <StallCard/>
      <StallCard/>
    </ScreenWrapper>
  )
}

export default MyStalls

const styles = StyleSheet.create({})