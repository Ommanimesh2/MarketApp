import { StyleSheet,Button, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ScreenWrapper from '../components/ScreenWrapper'
import MachineCard from '../components/MachineCard'
import Jobviewcard from '../components/Jobviewcard'
const AllJobs = ({navigation}) => {


  useEffect(() => {
    axios.get("https://ommanimesh.pythonanywhere.com/login/").then((response) => {
        
        set(response.data.data.data);
       
      });

      axios.get("/tasks").then((response) => {
        
        const tasks = response.data.data.data
        setTasks(tasks)
      });
      
},[])

  return (
    

    <ScreenWrapper>

   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.app}>
      <Jobviewcard src={require(`..//../assets/phone.png`)}/>

   </ScrollView>
   <View style={styles.button}>

     <Button onPress={()=>navigation.navigate('MyJobs')} color='#41543B'  title="Your Jobs"/>
   </View>
    </ScreenWrapper>
  )
}

export default AllJobs

const styles = StyleSheet.create({
  app: {
    display:'flex',
    flexDirection: "column",
    flexWrap: "wrap"
  },
  button:{
    position:'absolute',
    right:18,
    bottom:10,
    borderRadius: 8,
  }
})