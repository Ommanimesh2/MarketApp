import { StyleSheet,Image,Pressable, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const Login = ({navigation}) => {
  return (
<View style={styles.maincontainer}>
          <View style={styles.container}>
 <Image
style={styles.imagecontainer}
 source={require("..//../assets/logo.png")}
 ></Image>
 <Text style={styles.heading}>
 BHOOMICAM
 </Text>
 <Text style={styles.para}>  
 Rent, Lend and be updated about latest market trends at one place
 </Text>

 <Pressable style={styles.button} >
      <Text style={styles.text}>Continue with Google</Text>
    </Pressable>
    <Pressable style={styles.button} >
      <Text style={styles.text}>Continue with Email</Text>
    </Pressable>
    <Pressable style={styles.button} >
      <Text style={styles.text}>Continue with Mobile</Text>
    </Pressable>
    <Text style={styles.last}>
    Already have an account?
    <Text onPress={()=>{navigation.navigate('signup')}}>Log in</Text> 
    </Text>
</View>
</View>
    );
}

export default Login;

const styles = StyleSheet.create({
  maincontainer: {
    height:'100%',
    width:'100%',
    backgroundColor: '#ffffff',
  },
 container: {
   width:'100%',
   alignContent: 'center',
   alignItems:'center',
   marginTop: ,
  backgroundColor: '#ffffff',
  },
heading:{
  fontFamily:'Open Sans',
  fontStyle:' normal',
  fontWeight:'700',
  fontSize: 36,
  marginTop:'5%',
  color: '#B49700',
},
imagecontainer:{
width:'44%',
height:'26%',
},
para:{
  fontFamily: 'Outfit',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: 16,
  width:'80%',
  marginTop:'5%',
  marginBottom:'6%',
  textAlign:'center',
},
button:{
  marginTop:'5%',
  width:'80%',
  height:'10%',
  backgroundColor: 'rgba(0, 172, 0, 0.45)',
borderColor :'#00AC00',
borderRadius: 28,
borderStyle:'solid',
borderWidth:2,
justifyContent: 'center',
alignItems: 'center',
},
last:{
  marginTop:'10%',
}
}
);



   

