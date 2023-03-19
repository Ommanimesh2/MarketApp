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
    <ScreenWrapper>

    <View >
      <Button title='thi' onPress={()=>navigation.navigate("h")}></Button>
      <Text>Login</Text>
    </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})