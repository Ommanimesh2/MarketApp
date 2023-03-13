import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { Context } from "../context/Context";

const Home = () => {
  const {data,setData}=useContext(Context)
  return (
    <ScreenWrapper>
      <View>
        <Text>{data}</Text>
        <Text>Home</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
