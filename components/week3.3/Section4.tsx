import React from "react";
import { Text, View } from "react-native";
export default function Section4() {
  return (
    <View
      style={{
        marginBottom:10,
        padding: 5,
        borderWidth: 0.5,
        borderColor: "black",
        backgroundColor:"white"
      }}
    >
      {/* View ก้อนที่ 1 */}
      <View style={{ alignContent:"center", }}>
        <Text style={{ fontSize: 20,}}>Hotel Description</Text>
      </View>
      {/* View ก้อนที่ 2 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
         
        }}
      >
        
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

