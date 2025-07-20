import Card from "@/components/Week3/Card";
import Hotel from "@/components/Week3/Hotel";
import Menu from "@/components/Week3/Menu";
import Signup from "@/components/Week3/Sigup";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Travel() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text></Text>
        <Menu />
        <Card />
        <Hotel />
        <Signup />
      </View>
    </ScrollView>
  );
}
