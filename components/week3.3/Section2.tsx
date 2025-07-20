import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
export default function Section2() {
  return (
    <View
      style={{
        marginTop:-25,
        padding: 5,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor:"white",
      }}
    >
      {/* View ก้อนที่ 1 */}
      <View style={{ alignContent:"center", }}>
        <Text style={{ fontSize: 20,textAlign:"center",}}>Hilton San Francisco</Text>
      </View>
      {/* View ก้อนที่ 2 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
         
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>
      </View>
      {/* View ก้อนที่ 5 */}
      <View style={{  }}>
        <Text style={{ fontSize: 15, color: "black" }}>
          Facilities provided may range from a modest quality mattress in a
          small room to large suites
        </Text>
      </View>
    </View>
  );
}
