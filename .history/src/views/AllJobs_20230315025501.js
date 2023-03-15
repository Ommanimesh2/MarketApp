import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const AllJobs = () => {
  return (
    <ScreenWrapper>
      <View style={styles.Jobcontainer}>
        <View style={styles.JobHeadercontainer}>
        
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
     <Image
style={styles.imagecall}
 source={require("..//../assets/phone.png")}
 ></Image>
        </View>
        <View style={styles.footer}>

        </View>
        <View style={styles.locationcontainer} >
<Text>TRgtrg</Text>
        <Image
style={styles.imagelocate}
 source={require("..//../assets/map.png")}
 ></Image>
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
    height:'27%',
    backgroundColor: '#F9FCFE',
borderColor: '#E0E6EF',
borderRadius: 16,
marginTop:12,
  },
  JobHeadercontainer:{
    display:'flex',
    flex:1,
    flexDirection:'row',
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
  fontStyle: 'normal',
  fonteight: 700,
  fontSize: 17,
  color: '#8CDA8C',
 },
 jobname:{
  fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 400,
fontSize: 16,
color: '#40577D',
 },
 imagecall:{
position: 'absolute',
right:10,
top:23,
 },

})