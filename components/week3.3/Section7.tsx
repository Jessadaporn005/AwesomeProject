import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View style={{ padding: 20 }}>
      {/* หัวข้อ */}
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Room Type</Text>

      {/* กล่องข้อมูลห้อง */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* รูปภาพห้อง */}
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          source={require("@/assets/week3/room-8.jpg")}
        />

        {/* ข้อความด้านขวา */}
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Standard Twin Room</Text>
          <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>$399.99</Text>
          <Text style={{ color: "#50a7f7", fontSize: 14 }}>
            Hurry Up! This is your last room!
          </Text>
        </View>
      </View>
    </View>
  );
}
