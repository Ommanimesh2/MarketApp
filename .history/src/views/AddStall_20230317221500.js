import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

const AddStall = () => {
  return (
    <ScreenWrapper>
      
    </ScreenWrapper>
  )
}

export default AddStall

const styles = StyleSheet.create({
  newjobinput:{
    marginLeft: 16,
    // marginTop:40,
    height: 56,
    borderColor: '#7a42f4',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  borderColor: '#D8DADC',
  borderRadius: 10,
  padding:15,
  marginBottom:10,
  },
  flexcolumn:{
  display:'flex',
  flexDirection:'column',
  },
  jobheader:{
  marginLeft:-50,
  },
  newjobinputt:{
    // marginLeft: 16,
    height: 56,
    width:120,
    borderColor: '#7a42f4',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  borderColor: '#D8DADC',
  borderRadius: 10,
  padding:15,
  marginBottom:10,
  },
  bodynewjob:{
  marginTop:-50,
  },
  newjobinputtext:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    margin:15,
    marginBottom:5,   
  },
  flexinputs:{
    display: 'flex',
    flexDirection:'row',
  height:'10%',
  justifyContent:'space-between',
  marginLeft:10,
  marginRight:40,
  marginBottom:40,
  },
  addjobbutton:{
    height:56,
  margin:15,  
  marginTop:0,
    backgroundColor: '#00AC00',
  borderRadius: 10,
  borderStyle:'solid',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:2,
  },
  addjobtext:{
    color: '#FFFFFF',
    fontSize:16,
    fontWeight:600,
  }
})