import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const AllJobs = () => {
  return (
    <ScreenWrapper>
      <View style={styles.Jobcontainer}>
     <View style={styles.Jobheader}>
     <Image
style={styles.imagecontainer}
 source={require("..//../assets/Avata.png")}
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
    height:'30%',
    backgroundColor: '#F9FCFE',
borderColor: '#E0E6EF',
borderRadius: 16,
marginTop:12,
  }
})