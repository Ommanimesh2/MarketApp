import { StyleSheet, Text,TextInput, View ,Pressable} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ScreenWrapper from '../components/ScreenWrapper'

const NewJob = () => {
  return (
    <ScreenWrapper>
      <View style={styles.Addjobwrapper}>
    <Text style={styles.jobheader}>
    <Header text = "Add New Job"/> </Text> 
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
                <Text>
                  <Text style={styles.flexcolumn}>

                <Text style={styles.newjobinputtext}>Number of days</Text>
      <TextInput style = {styles.newjobinput}
               underlineColorAndroid = "transparent"
               placeholder = "Role for Job"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              /> </Text> 
                  </Text>
               <Text>
                <Text style={styles.flexcolumn}>
               <Text style={styles.newjobinputtext}>Price</Text>
      <TextInput style = {styles.newjobinputt}
               underlineColorAndroid = "transparent"
               placeholder = "Price"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
                </Text>
              </Text>

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
      <Pressable style={styles.addjobbutton} >
      <Text style={styles.addjobtext}>Add Job</Text>
    </Pressable>
      </View>
     
    </ScreenWrapper>
  )
}

export default NewJob

const styles = StyleSheet.create({

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
flexcolumn:{
display:'flex',
flexDirection:'row',
},
jobheader:{
marginLeft:-50,
},
newjobinputt:{
  // marginLeft: 16,
  height: 56,
  width:60,
  borderColor: '#7a42f4',
  borderWidth: 1,
  backgroundColor: '#FFFFFF',
borderColor: '#D8DADC',
borderRadius: 10,
padding:15,
marginBottom:10,
},
bodynewjob:{
marginTop:-30,
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
},
addjobbutton:{
  height:56,
margin:15,  
  backgroundColor: '#00AC00',
borderRadius: 10,
borderStyle:'solid',
justifyContent: 'center',
alignItems: 'center',
marginBottom:2,
},
addjobtext:{
  color: '#FFFFFF',
  fontSize:16,
  fontWeight:600,
}

})