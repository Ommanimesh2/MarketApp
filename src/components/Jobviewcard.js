import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StyleSheet,Image, Text, View,Pressable } from 'react-native'

const Jobviewcard = ({src}) => {
  console.log(src)
  return (
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
 source={src}
 ></Image>
        </View>
  <View style={styles.footer}>
        <View style={styles.locationcontainer} >
        <Image
style={styles.imagelocate}
 source={require("..//../assets/map.png")}
 ></Image>
  <Text style={styles.locationtext}>Roorkee, India</Text>
        </View>
        <View style={styles.joblast}>
      <Text style={styles.joblasttext}>Rs. 500 per day </Text>
      <Text style={styles.joblasttext}>5 day work </Text>
        </View>
        </View>
     </View>
  )
}

export default Jobviewcard

const styles = StyleSheet.create({
  Jobcontainer:{
    width:'100%',
    height:180,
    backgroundColor: '#F9FCFE',
borderColor: '#E0E6EF',
borderRadius: 16,
marginTop:40,
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
  fontStyle: 'normal',
  fonteight: 700,
  fontSize: 17,
  color: '#8CDA8C',
 },
 jobname:{
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
 locationcontainer:{
  display:'flex',
  flex:1,
  flexDirection:'row',
  flexWrap:'wrap',
  margin:13,
  marginTop:20,
 },
joblast:{
  display:'flex',
  flex:1,
  flexDirection:'row',
  flexWrap:'wrap',
  marginTop:30,
  marginBottom:50,
},
joblasttext:{
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
  // width: '10%',
  // height: '10%',
  backgroundColor:'#00AC00',
  color:'#ffffff',
  borderRadius: 8,
  marginLeft:20,
},
locationtext:{
  fontWeight: 500,
  fontSize: 14,
  color: '#40577D',
  marginLeft:10,
},
imagelocate:{
  height:22,
  width:21,
  marginLeft:10,
}
})
