import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Tour(props:any) {
    return (
        <View style={props.style}>
            
            <Text style={{ fontSize : 20 }}>Tour</Text>
            <Text style={{ color:"grey" }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true} style={{ flexDirection:"row"}}>
                    <View style={{ marginRight: 10 }}>
                      <Image
                        style={{ width: 200, height: 150, borderRadius: 10 }}
                        source={{
                          uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
                        }}
                      />
                      </View>
                    <View style={{ marginRight: 10 }}>
                      <Image
                        style={{ width: 200, height: 150, borderRadius: 10 }}
                        source={{
                          uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
                        }}
                      />
                      </View>
                    <View style={{ marginRight: 10 }}>
                      <Image
                        style={{ width: 200, height: 150, borderRadius: 10 }}
                        source={{
                          uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
                        }}
                      />
                      </View>
                      
            </ScrollView>
            
        </View>
        
    );
}


