import React from "react";
import { View } from "react-native";
import MyIcon from "../Week3/MyIcon";
export default function Section5() {
  return (
    <View style={{ margin : -10 , padding : 10, borderWidth : 1, borderColor : 'gray', borderRadius : 20 }}>
      {/* View ก้อนที่ 1 */}
      <View >
       
      </View>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection:"row", marginTop : 10 , }}>
        <MyIcon title="wifi" name="wifi" size={30} color="dodgerblue" />
        <MyIcon title="coffee" name="coffee" size={30} color="dodgerblue" />
        <MyIcon title="bath" name="bath" size={30} color="dodgerblue" />
        <MyIcon title="car" name="car" size={30} color="dodgerblue" />
        <MyIcon title="paw" name="paw" size={30} color="dodgerblue" />
       
      </View>
     
    </View>
  );
}

