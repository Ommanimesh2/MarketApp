import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Header from "../components/Header";

const Profile = () => {
  return (
    <View style={styles.profcontainer}>
      <View style={styles.profileheading}></View>
      <View style={styles.profilebody}>
        <Text style={styles.profinputtext}>Username</Text>
        <TextInput
          style={styles.inputprof}
          underlineColorAndroid="transparent"
          placeholder="Phone Number"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          placeholderFontSize="20"
          autoCapitalize="none"
        />
        <Text style={styles.profinputtext}>Phone Number</Text>
        <TextInput
          style={styles.inputprof}
          underlineColorAndroid="transparent"
          placeholder="Phone Number"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          placeholderFontSize="20"
          autoCapitalize="none"
        />
        <Text style={styles.profinputtext}>Address</Text>
        <TextInput
          style={styles.inputprof}
          underlineColorAndroid="transparent"
          placeholder="Phone Number"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          placeholderFontSize="20"
          autoCapitalize="none"
        />
        <Pressable style={styles.signbutton}>
          <Text style={styles.text}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileheading: {
    marginTop: 50,
    height: 150,
    width: "100%",
    backgroundColor: "#00AC00",
  },
  profilebody: {
    marginTop: 50,
  },
  profinputtext: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
  },
  profinputtext: {
    fontStyle: "normal",
    fontWeight: 500,
    margin: 15,
    marginBottom: 5,
  },
  inputprof: {
    marginLeft: 16,
    // marginTop:40,
    height: 66,
    borderColor: "#7a42f4",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#D8DADC",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },

export default Profile)}
