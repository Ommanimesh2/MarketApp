import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { useContext } from 'react'
import { Context } from '../context/Context'
const AllStalls = () => {
  const {data,setData}=useContext(Context)

  return (

    <ScreenWrapper>
        <View>
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setData(newText)}
        defaultValue={data}
      />
      <Text>AllStalls</Text>
        </View>
    </ScreenWrapper>
  )
}

export default AllStalls

const styles = StyleSheet.create({})