import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
export default function Section8() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" ,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        margin: 20,
        backgroundColor: "#fff",
    }}>
      <View style={{ flexDirection: "column", marginTop: 10 }}>
        <Text style={{ fontSize: 15, color: "black" }}>Price</Text>
        <Text style={{ fontSize: 25, color: "red" }}>$399.99</Text>
        <Text style={{ fontSize: 15, color: "black" }}>AVG/Night</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#e25f4f",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          aspectRatio:5/2,
          justifyContent:"center",
          alignItems:"center",
        }}
        onPress={() => {
          console.log("Booking triggered!");
        }}
      >
        <Text style={{ fontSize:30,color: "white", fontWeight: "bold",textAlign:'center' }}>Book Now</Text>
      </TouchableOpacity>
    </View>
    
  );
}
