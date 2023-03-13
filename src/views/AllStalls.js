import { StyleSheet, Text, View, TextInput,Button } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { TouchableHighlight } from "react-native";
import { useContext,useState } from "react";
import { Context } from "../context/Context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Alert } from "react-native";

const AllStalls = () => {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
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
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      >

  <Marker
    coordinate={region}
  />
                           
      </MapView>
      <View style={styles.text}>

     <Button title="Your Stalls" color={"#41543B"} onPress={() => Alert.alert('Simple Button pressed')} /> 
      </View>
    </View>
  );
};

export default AllStalls

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  text:{
    position:"absolute",
    right:6,
    bottom:6,
    padding:10
  }
});
