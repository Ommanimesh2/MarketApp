import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import MapDrawer from "../components/MapDrawer";
import { useContext,useEffect } from "react";
import { Context } from "../context/Context";
import * as Location from 'expo-location';

const Login = ({navigation}) => {
  const {location, setLocation}=useContext(Context)
  
  useEffect(() => {
    (async () => {
      try {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          return;
        }
        
        let locati = await Location.getCurrentPositionAsync({});
        console.log("locations", location)
        setLocation(locati);
      } catch (error) {
        console.log(error)
      }
    })();
  }, [location]);



  const LoginUser = async (e) => {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const userData = await response.json();
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image
          style={styles.imagecontainer}
          source={require("..//../assets/logo.png")}
        ></Image>
        <Text style={styles.heading}>BHOOMICAM</Text>
        <Text style={styles.para}>
          Rent, Lend and be updated about latest market trends at one place
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.text}>Continue with Google</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Continue with Email</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          <Text style={styles.text}>Continue with Mobile</Text>
        </Pressable>
        <Text style={styles.last}>
          Already have an account?
          <Text style={styles.textlogin}>Log in</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  container: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    marginTop: "20%",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontWeight: "700",
    fontSize: 36,
    marginTop: "5%",
    color: "#B49700",
  },
  imagecontainer: {
    height: 200,
    width:200,
    borderRadius: 50,
  },
  para: {

export default Login

