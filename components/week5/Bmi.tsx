import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const getBmiLevel = (bmi: number): string => {
  if (bmi < 18.5) return "Underweight";
  else if (bmi < 24.9) return "Normal";
  else if (bmi < 29.9) return "Overweight";
  else if (bmi < 35) return "Extremely Obese";
  else return "Obese";
};

export default function Bmi() {
  const [Weight, setWeight] = useState("70");
  const [Height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");

  //   console.log("STATE : ", weight, height, bmi);
  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");

    const w = parseFloat(Weight);
    const h = parseFloat(Height) / 100;

    if (!isNaN(w) && !isNaN(h) && h > 0) {
      const output = w / (h * h);
      setBmi(output.toFixed(2));
    } else {
      setBmi("0");
    }
  };

  return (
    <View>
      {/* แถวที่ 1 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Weight (kg.)</Text>
        <TextInput
          value={Weight}
          keyboardType="numeric"
          onChangeText={(newWeight) => setWeight(newWeight)}
          placeholder="Input your wegiht"
        />
      </View>
      {/* แถวที่ 2 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Height (cm.)</Text>
        <TextInput
          value={Height}
          onChangeText={(newHeight) => setHeight(newHeight)}
          keyboardType="numeric"
          placeholder="Input your height"
        />
      </View>
      {/* แถวที่ 3 */}
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text>{bmi}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
        <Text>{getBmiLevel(parseFloat(bmi))}</Text>
        </View>
      </View>
      {/* แถวที่ 4 */}
      {/* <Button title="Calculate" onPress={onPressButton} /> */}
      <TouchableOpacity onPress={onPressButton}>
        <View
          style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}
        >
          <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
