import { StyleSheet,TextInput,Pressable, Text, View } from 'react-native'
import { Context } from "../context/Context";
import React from 'react'
import { useState, useContext } from 'react'
import Header from '../components/Header'
import ScreenWrapper from '../components/ScreenWrapper'
import { MonthDateYearField } from 'react-native-datefield'
import { Alert } from "react-native";


const AddStall = () => {
  const stallsinput = {
   Stallstopic: "",
    Date: "",
    noofdays:"",
    location: "",
    time: "",
    phoneno: "",
  };

  const [stallsdata, setStallsdata] = useState(machineinput);
  const {addStall, setAddStall} = useContext(Context);

  const handleChange = (e) => {
    setStallsdata({ ...stallsdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:8000/api/createjob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobdata),
    });
    const JobData = await response.json();
    setJob(JobData);
    
    console.log(JobData);
    };
  return (
    <ScreenWrapper>
      <View style={styles.Addjobwrapper}>
        <Text style={styles.jobheader}>
          <Header text="Add Stalls" />{" "}
        </Text>
        <View style={styles.bodynewjob}>
          <Text style={styles.newjobinputtext}>Stall Topic</Text>
          <TextInput
          onChangeText={handleChange}
            style={styles.newjobinput}
            value={stallsdata.Stallstopic}
            underlineColorAndroid="transparent"
            placeholder="Topic"
            placeholderTextColor="rgba(0, 0, 0, 0.7)"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
          <Text style={styles.newjobinputtext}>
            Date
          </Text>
          <MonthDateYearField
             value={stallsdata.Date}
            style={styles.newjobinput}
            underlineColorAndroid="transparent"
            placeholder="No. of Workers"
            placeholderTextColor="rgba(0, 0, 0, 0.7)"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
          <Text style={styles.newjobinputtext}>Location</Text>
          <TextInput
          onChangeText={handleChange}
            style={styles.newjobinput}
            underlineColorAndroid="transparent"
            placeholder="Location"
            placeholderTextColor="rgba(0, 0, 0, 0.7)"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
          <View style={styles.flexinputs}>
            <View style={styles.flexcolumn}>
              <Text style={styles.newjobinputtext}>Number of days</Text>
              <TextInput
              onChangeText={handleChange}
              value={stallsdata.noofdays}
                style={styles.newjobinputt}
                underlineColorAndroid="transparent"
                placeholder="No. of days"
                placeholderTextColor="rgba(0, 0, 0, 0.7)"
                placeholderFontSize="20"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.flexcolumn}>
              <Text style={styles.newjobinputtext}>Time</Text>
              <TextInput
              onChangeText={handleChange}
              value={stallsdata.time}
                style={styles.newjobinputt}
                underlineColorAndroid="transparent"
                placeholder="Price"
                keyboardType="numeric"
                placeholderTextColor="rgba(0, 0, 0, 0.7)"
                placeholderFontSize="20"
                autoCapitalize="none"
              />
            </View>
          </View>
          <Text style={styles.newjobinputtext}>Phone Number</Text>

          <TextInput
          onChangeText={handleChange}
          value={stallsdata.phoneno}
            style={styles.newjobinput}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            placeholder="Contact no."
            placeholderTextColor="rgba(0, 0, 0, 0.7)"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
        </View>
        <Pressable
          style={styles.addjobbutton}
          onPress={() => {
            Alert.alert("Job Added");
          }}
        >
          <Text style={styles.addjobtext}>Add Stalls</Text>
        </Pressable>
      </View>
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