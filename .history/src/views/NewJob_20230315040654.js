import { StyleSheet, Text,TextInput, View ,P5} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const NewJob = () => {
  return (
    <ScreenWrapper>
     <View style={styles.header}>
     <Text style={styles.profinputtext}>Username</Text>
      <TextInput style = {styles.inputprof}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
               <Text style={styles.profinputtext}>Phone Number</Text>
                <TextInput style = {styles.inputprof}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
        <Text style={styles.profinputtext}>Address</Text>
                 <TextInput style = {styles.inputprof}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "rgba(0, 0, 0, 0.7)"
               placeholderFontSize="20"
               autoCapitalize = "none"
              />
                  <Pressable style={styles.signbutton} >
      <Text style={styles.text}>Update</Text>
    </Pressable>
      </View>
    </ScreenWrapper>
  )
}

export default NewJob

const styles = StyleSheet.create({

})