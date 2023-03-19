import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const MachineCard = (e.Name}
  ,MachineDetails}
  ,location}
  ,Price}
  ,Contact) => {
  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <Text style={{fontSize:17}}>Tractor</Text>
        <Image source={require('../../assets/delete.png')}/>
      </View>
      <Image style={{width:'100%',marginTop:15,marginBottom:7}} source={require('../../assets/tractor.jpeg')}/>
      <View style={styles.space}>
        <Text style={{fontSize:17}}>54.00</Text>
        <Image source={require('../../assets/Expand.png')}/>
      </View>
    </View>
  )
}

export default MachineCard

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        marginRight:32,
        height:230,
        width:157,
        borderRadius: 10,
        borderColor:'#E0E6EF',
        backgroundColor:'white',
        borderWidth:2,
        padding:14
    },
    space:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'
        

    }
})