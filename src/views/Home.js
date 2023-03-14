import React, { useContext, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { Context } from "../context/Context";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";

const Home = () => {
  state = {
    ready: false,
    SlideInLeft: new Animated.Value(0),
    slideUpValue: new Animated.Value(0),
    fadeValue: new Animated.Value(0),
  };

  _start = () => {
    return Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.slideUpValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };
  const {data,setData}=useContext(Context)

  const [show,setShow]=useState(true)
  let { slideUpValue, fadeValue, SlideInLeft } = this.state;
  return (
    <ScreenWrapper>
      <View  style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => {
        this._start()
        }}>
          <Text onPress={()=>{
               if(show)setShow(false)
               else setShow(true)
          }} style={styles.textBtn}>Start</Text>
        </TouchableOpacity>
        { 
        show ?  <Animated.View
        style={{
          transform: [
            {
              translateY: SlideInLeft.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 200]
              })

            }
          ],
          flex: 1,
          height: 150,
          width: 300,
          borderRadius: 12,
          backgroundColor: "#347a2a",
          justifyContent: "center"
        }}
      >
        <Text style={styles.text}>SlideInLeft </Text>
      </Animated.View> :  <Animated.View
          style={{
            transform: [
              {
                translateY: SlideInLeft.interpolate({
                  inputRange: [0, 1],
                  outputRange: [200, 300]
                })

              }
            ],
            flex: 1,
            height: 150,
            width: 300,
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>SlideInLeft </Text>
        </Animated.View>
        }
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 29
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  }
});
