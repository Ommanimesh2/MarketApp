import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { useState,useContext } from "react";
import { Context } from "../context/Context";
import React from "react";
import Header from "../components/Header";
import ScreenWrapper from "../components/ScreenWrapper";
import axios from "axios";
import { Alert } from "react-native";

const NewJob = ({navigation}) => {
  const Jobinput = {
    JobTitle: "",
    workers: "",
    days: "",
    price: "",
    contact: "",
  };

  const [jobdata, setJobdata] = useState(Jobinput);
  const {addjob, setAddjob} = useContext(Context);
  const [JobTitle, setJobTitle] = useState(null)
  const {location, setLocation} = useContext(Context)
  const [price, setPrice] = useState(null)
  const [Contact, setContact] = useState(null)
  const [name,setName]=useState("")
  const[workers,setWorkerss]=useState("")
  const[days,setDays]=useState("")
  const[phoneno,setphoneno]=useState("")

  const handleSubmit = (JobTitle,
    workers,
     days,
    price,
    phoneno
    ) => {
    axios
    .post(`https://ommanimesh.pythonanywhere.com/api/createjob`, {
      JobTitle,
      workers,
      price,
      days,
      Contact:phoneno
    })
    .then(res => {
      let userInfo = res.data;
      // console.log(userInfo);
      setAddjob(userInfo)
      Alert.alert("Job added successfully")
    })
    .catch(e => {
      console.log(`register error ${e}`);
    });
  };
console.log(addjob)

return (
    <ScreenWrapper>
      <View style={styles.Addjobwrapper}>
        <Text style={styles.jobheader}>
          <Header text="Add New Job" />{" "}
        </Text>
        <View style={styles.bodynewjob}>
          <Text style={styles.newjobinputtext}>Role</Text>
          <TextInput
          onChangeText={hell => setName(hell)}
          value={JobTitle}
            style={styles.newjobinput}
            underlineColorAndroid="transparent"
            placeholder="Role for Job"
            placeholderTextColor="rgba(0, 0, 0, 0.7)"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
          <Text style={styles.newjobinputtext}>
            Number of workers (minimum)
          </Text>
          <TextInput
          onChangeText={texth => setWorkerss(texth)}
            style={styles.newjobinput}
            underlineColorAndroid="transparent"
            value={workers}
            placeholder="No. of Workers"
            placeholderTextColor="rgba(0, 0, 0, 0.7)"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
          <Text style={styles.newjobinputtext}>Location</Text>
          <TextInput
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
              onChangeText={text => setDays(text)}
                style={styles.newjobinputt}
                value={days}
                underlineColorAndroid="transparent"
                placeholder="No. of days"
                placeholderTextColor="rgba(0, 0, 0, 0.7)"
                placeholderFontSize="20"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.flexcolumn}>
              <Text style={styles.newjobinputtext}>Price</Text>
              <TextInput
              onChangeText={text => setPrice(text)}
              value={price}
                style={styles.newjobinputt}
                underlineColorAndroid="transparent"
                placeholder="Price"
                placeholderTextColor="rgba(0, 0, 0, 0.7)"
                placeholderFontSize="20"
                autoCapitalize="none"
              />
            </View>
          </View>
          <Text style={styles.newjobinputtext}>Phone Number</Text>

          <TextInput
          onChangeText={text => setphoneno(text)}
          value={phoneno}
            style={styles.newjobinput}
            underlineColorAndroid="transparent"
            placeholder="Contact no."
            placeholderTextColor="rgba(0, 0, 0, 0.7)"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
        </View>
        <Pressable
          style={styles.addjobbutton}
          onPress={() => {
            handleSubmit(
              JobTitle,
              workers,
               days,
              price,
              phoneno)
          }}
        >
          <Text style={styles.addjobtext}>Add Job</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default NewJob;


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
