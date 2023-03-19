import { StyleSheet, Text, View, Image, Button,Pressable } from "react-native";
import React from "react";

const MapDrawer = () => {
  return (
    <View>
      <View style={styles.DrawerContainer}>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "800",
              paddingTop:4
            }}
          >
            Sony ASR-48
          </Text>
          <View style={{ display: "flex", paddingVertical:8, flexDirection: "row", gap: 6 }}>
            <Text style={{color:'white',opacity:0.5, fontSize:18}}>3.25 km</Text>
            <Text style={{color:'#00AC00', fontSize:20,fontWeight:600}}>3.25</Text>
  
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
            <Image source={require("../../assets/location.png")} />

            <Text style={{fontSize:12, color:'white'}}>Rooreke , Uk</Text>
          </View>
          <Text style={{fontSize:18, color:'white',paddingVertical:8}}>Product Details</Text>

        </View>
        <View>
          <Image
            style={{ borderRadius: 25 }}
            source={require("../../assets/tractor.jpeg")}
          />
        </View>
      </View>
      <View style={{ maxWidth: 320, paddingTop: 20 }}>
        <Text style={{color:'white'}}>
          Lorem ipsum dolor culpa! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ratione ex dolor voluptates provident nulla
          recusandae.
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingTop:6
        }}
      >
        <Pressable style={styles.customBtn}>
            <Text style={{fontSize:10}}>Wishlist</Text>
        </Pressable>
        <View style={{ display: "flex", flexDirection: "row", gap: 3,alignItems:'center' } }>
          <Image source={require("../../assets/phone.png")} />

          <Text style={{color:'white'}}>8093232149</Text>
        </View>
      </View>
    </View>
  );
};

export default MapDrawer;

const styles = StyleSheet.create({
  DrawerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    width: 320,
    color:'white'
  },
  customBtn:{
    backgroundColor:'#8CDA8C',
    borderWidth:1,
    borderColor:'#8BC53F',
    borderRadius:6,
    width:76,
    height: 30,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}
});
