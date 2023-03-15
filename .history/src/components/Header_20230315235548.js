import React from 'react'
import { StyleSheet, Text, View, Pressable ,TextInput,Alert} from 'react-native';



const Header = () => {
  return (
    <ScreenWrapper>
          <View style={styles.header}>
        <Text style={styles.headertext}> Add New Job </Text>
      </View>
        </ScreenWrapper>
  )
}


export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#00AC00',
      width:'100%',
      height:48,
      marginLeft:-24,
      width:400,
      
      },
      headertext:{
        color: '#FFFFFF',
      fontSize:20,
      margin:8,
      
      },
})