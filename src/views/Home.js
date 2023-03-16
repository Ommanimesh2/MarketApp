import React, { useContext, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { Context } from "../context/Context";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button

} from "react-native";
import StallCard from "../components/StallCard";
const Home = ({navigation}) => {

  return (
    <ScreenWrapper>
        <View>
          <Button title='Add New Job' onPress={()=>navigation.navigate('NewJob')}/>
          <Button title='Add New Stall' onPress={()=>navigation.navigate('AddStall')}/>
          <Button title='Add New Machine' onPress={()=>navigation.navigate('AddRentMachines')}/>

        </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  app: {
    display:'flex',
    flexDirection: "column",
    flexWrap: "wrap",
    height:100,
    position:'absolute'
  },
});
