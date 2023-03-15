import { StyleSheet, Text,TextInput, View ,Pressable} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const NewJob = () => {
  return (
    <ScreenWrapper>
      <View style={styles.Addjobwrapper}>
      <View style={styles.header}>
        <Text style={styles.headertext}> Add New Job </Text>
      </View>
      <View style={styles.bodynewjob}>
        <Text>
          Role
        </Text>
        <Text style={styles.newjobinputtext}>Username</Text>
      <TextInput style = {styles.inputprof}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
      </View>
      </View>
     
    </ScreenWrapper>
  )
}

export default NewJob

const styles = StyleSheet.create({
header:{
  backgroundColor:'#00AC00',
width:'100%',
height:48,
marginLeft:-24,
width:400,

},
headertext:{
  color: '#FFFFFF',
fontSize:20,
margin:8,

}

})