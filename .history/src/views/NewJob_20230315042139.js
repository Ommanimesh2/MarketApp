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
      <TextInput style = {styles.newjobinput}
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

},
newjobinput:{
  marginLeft: 16,
  // marginTop:40,
  height: 66,
  borderColor: '#7a42f4',
  borderWidth: 1,
  backgroundColor: '#FFFFFF',
borderColor: '#D8DADC',
borderRadius: 10,
padding:15,
marginBottom:10,
},
newjobinputtext:{
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  margin:15,
  marginBottom:5,   
}

})