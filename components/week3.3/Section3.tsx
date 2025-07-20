import React from "react";
import { Text, View } from "react-native";

export default function Section3() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      <View
        style={{
          borderRadius: 25,
          backgroundColor: "red",
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>9.5</Text>
      </View>

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>Excellent</Text>
        <Text style={{ fontSize: 14, color: "black" }}>See 801 reviews</Text>
      </View>
    </View>
  );
}
