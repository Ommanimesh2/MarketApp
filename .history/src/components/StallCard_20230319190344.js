import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";

const StallCard = (StallTopic, Date, noofdays,  ) => {
   
  

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ borderRadius: 8, height: 110, width: 110 }}
          source={require("../../assets/tractor.jpeg")}
        />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "72%",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 800 }}>Organic sall</Text>
          <Image source={require("../../assets/delete.png")} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            paddingHorizontal: 15,
            paddingTop: 6,
          }}
        >
          <Image
            style={{ padding: 10, tintColor: "black" }}
            source={require("../../assets/location.png")}
          />

          <Text style={{ fontSize: 15 }}>Rooreke , Uk</Text>
        </View>
        <Text style={{ fontSize: 12, paddingHorizontal: 17, paddingTop: 8 }}>
          alskdjfasdkjf
        </Text>
        <Text style={{ paddingHorizontal: 17 }}>aslkdfjasdf </Text>
      </View>
    </View>
  );
};

export default StallCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 340,
    height: 150,
    paddingTop: 16,
    marginTop: 16,
    borderWidth: 1,
    backgroundColor: "#F9FCFE",
    borderColor: "#F9FCFE",
    borderRadius: 8,
  },
});
