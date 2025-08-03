import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {

  const [onlineEvent, setOnlineEVent] = useState([]);
  const loadOnlineEvent = async () => {
    try {
      let text = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      let data = await text.json();
      console.log("Load Data : ", data);
      //SET STATE
      setOnlineEVent(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    loadOnlineEvent();
  }, []);
  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Up Coming Event</Text>
      <Text style={{ color: "grey" }}>
        What's the Worst That Could Happend
      </Text>

      <FlatList
        horizontal={true}
        // data={tours}
        data={onlineEvent}
        renderItem={({ item, index }:any) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10 }}>
              <Image
                style={{ width: 350, height: 150, borderRadius: 10 }}
                source={{
                  uri: item.uri,
                }}
              />
              <View
                style={{
                  marginTop: 10,
                  height: 80,
                  width: 350,
                  backgroundColor: "#fff8dc",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "red", fontWeight: "bold", marginRight: 10 }}
                >
                  {item.month}
                  {"\n"}
                  <Text style={{ color: "black", fontSize: 20 }}>
                    {item.date}
                  </Text>
                </Text>

                <Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.title}
                    {"\n"}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#555" }}>
                    {item.datetime}
                    {"\n"}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#555" }}>
                    {item.place}
                  </Text>
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item:any) => item.id}
      />
    </View>
  );
}
