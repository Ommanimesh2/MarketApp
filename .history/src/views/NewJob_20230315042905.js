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
        <Text style={styles.newjobinputtext}>Role</Text>
      <TextInput style = {styles.newjobinput}
               underlineColorAndroid = "transparent"
               placeholder = "Role for Job"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
                <Text style={styles.newjobinputtext}>Number of workers (minimum)</Text>
      <TextInput style = {styles.newjobinput}
               underlineColorAndroid = "transparent"
               placeholder = "No. of Workers"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
                <Text style={styles.newjobinputtext}>Location</Text>
      <TextInput style = {styles.newjobinput}
               underlineColorAndroid = "transparent"
               placeholder = "Location"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
              <View style={styles.flexinputs}>
                <View> <Text style={styles.newjobinputtext}>Number of days</Text>
      <TextInput style = {styles.newjobinput}
               underlineColorAndroid = "transparent"
               placeholder = "Role for Job"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              /></View>
               <View>

               </View>
                
                <Text style={styles.newjobinputtext}>Phone Number</Text>
      <TextInput style = {styles.newjobinput}
               underlineColorAndroid = "transparent"
               placeholder = "Contact no."
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
  height: 56,
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
},
flexinputs:{
  display: 'flex',
  flexDirection:'row',

}

})