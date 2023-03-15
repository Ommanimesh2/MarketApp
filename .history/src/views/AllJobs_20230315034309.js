import { StyleSheet,Image, Text, View,Pressable } from 'react-native'
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
    </ScreenWrapper>
  )
}

export default AllJobs

