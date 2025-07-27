import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Heartbeat() {
  const [likes, setLikes] = useState(0);

  const onPressHeart = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.heartButton} onPress={onPressHeart}>
        <Text style={styles.heart}>❤️</Text>
        <Text style={styles.count}>{likes}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  heartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
  },
  heart: {
    fontSize: 50,
    marginRight: 10,
  },
  count: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
