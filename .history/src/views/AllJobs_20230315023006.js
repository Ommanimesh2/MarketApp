import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const AllJobs = () => {
  return (
    <ScreenWrapper>
      <View style={styles.Jobcontainer}>
     <View style={styles.Jobheader}>
     <Image
style={styles.imagecontainer}
 source={require("..//../assets/AvatarBoy.png")}
 ></Image>
 <View style={styles.Jobinfo}>
 <Text style={styles.jobname}>
  Prakhar Khatri
 </Text>
 <Text style={styles.jobno}>
  4 labourers required
 </Text>
 </View>
     </View>
     </View>
    </ScreenWrapper>
  )
}

export default AllJobs

const styles = StyleSheet.create({
  Jobcontainer:{
    width:'106%',
    marginLeft:-10,
    height:'30%',
    backgroundColor: '#F9FCFE',
borderColor: '#E0E6EF',
borderRadius: 16,
marginTop:12,
  },
  Jobheader:{
    display:'flex',
flex:1,
flexDirection:'row',
margin:15,
  },
 Jobinfo:{
  marginLeft:10,

 },
 jobno:{
  fontFamily: 'Inter',
  fontStyle: normal,
  fonteight: 700,
  fontSize: 14,
  lineHeight: '140%',
  letterSpacing: 0.3,
  color: '#8CDA8C',
 },
 jobname:{
  fontFamily: 'Inter',
fontStyle: normal,
fontWeight: 400,
fontSize: 12px,
lineHeight: 135%,
/* or 16px */

letterspacing: 0.3px,

color: #40577D,
 } 

})