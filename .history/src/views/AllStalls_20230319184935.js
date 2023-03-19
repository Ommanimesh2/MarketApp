import {
  StyleSheet,
  Text,
  Animated,
  View,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { TouchableHighlight } from "react-native";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Alert } from "react-native";
import { useEffect } from "react";
import MapDrawer from "../components/MapDrawer";
import Header from "../components/Header";

const AllStalls = ({ navigation } ) => {
const {location, setLocation}=useContext(Context)
const [stalldata, setStallsdata]=use


useEffect(() => {
  axios.get("https://ommanimesh.pythonanywhere.com/api/addstalls").then((response) => {
      console.log(response)
      setAlljobdata(response.data);
     
    });
},[])
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
        useNativeDriver: true,
      }),
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.slideUpValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const [show, setShow] = useState(false);
  let { slideUpValue, fadeValue, SlideInLeft } = this.state;
  const [region, setRegion] = useState({
    latitude: 22.9734,
    longitude: 78.6569,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [userLocation, setUserLocation] = useState({
    latitude:location ? location.coords.latitude : 51.5079145,
    longitude:location ? location.coords.longitude : -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const { data, setData } = useContext(Context);

  const datas = {
    coordinates: {
      longitude: 12.12,
      latitude: 76.68,
    },
  };

  const markerClick = () => {
    console.log("adf");
  };
  return (
   userLocation ? 
<View style={styles.containerTop}>


      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 22.9734,
          longitude: 78.6569,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
 
      >
        <Marker
          onPress={() => {
            if (show) {
              setShow(false);
            } else {
              setShow(true);
            }
            this._start();
            console.log("object");
          }}
          coordinate={userLocation}
          image={require("../../assets/Marker.png")}
        />
      </MapView>
      <View style={show ? styles.text : styles.text1}>
        <Button
          title="Your Stalls"
          color={"#41543B"}
        />
      </View>
      <View style={styles.container}>
        {show ? (
          <Animated.View
            style={{
              transform: [
                {
                  translateY: SlideInLeft.interpolate({
                    inputRange: [0, 1],
                    outputRange: [350, 700],
                  }),
                },
              ],
              flex: 1,
              height: 350,
              width: 390,
              borderTopEndRadius:52,
              borderTopStartRadius:52,
              position: "absolute",
              left:0,
              alignItems:'center',
            
              backgroundColor: "#41543B",
              
            }}
          >
            <MapDrawer/>
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              transform: [
                {
                  translateY: SlideInLeft.interpolate({
                    inputRange: [0, 1],
                    outputRange: [700, 400],
                  }),
                },
              ],
              flex: 1,
              height: 150,
              width: 300,
              borderRadius: 12,
              position: "absolute",
              backgroundColor: "#41543B",
              justifyContent: "center",
            }}
          ></Animated.View>
        )}
      </View>
    </View> : <Text>kdsalfj</Text>


  );
};

export default AllStalls;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    right: 6,
    bottom: 290,
    padding: 10,
  },
  text1: {
    position: "absolute",
    right: 6,
    bottom: 6,
    padding: 10,
  },
  containerTop: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: 100,
    position: "absolute",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 29,
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10,
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center",
  },
});
