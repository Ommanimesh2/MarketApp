import { StyleSheet, Text, View, Pressable ,TextInput,Alert} from 'react-native';
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const CreateAccount = ({navigation}) => {
  return (
    <View>
    <Text style={styles.signheading}>Create your account</Text> 
    <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Confirm Password"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
              <View style = {styles.signin}>
              <Pressable style={styles.signbutton} onPress={()=>{navigation.navigate('MainScreens')}} >
      <Text style={styles.text}>Sign Up</Text>
    </Pressable>
              </View>
              <Text style={styles.last}>
    Already have an account? 
    Log in
    </Text>
 </View>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
    signheading: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 32,
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        marginTop:167,
        marginBottom:40,
    },
    input: {
        margin: 15,
        // marginTop:40,
        height: 66,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
borderColor: '#D8DADC',
borderRadius: 10,
padding:15,
     },
  
signbutton:{
    height:56,
    margin:15,  
      backgroundColor: '#00AC00',
  borderRadius: 10,
  borderStyle:'solid',
//   borderWidth:2,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:2,
},
last:{
    marginTop:'4%',
   textAlign:'center',
  }
  });
  