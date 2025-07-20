import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function TestComponent() {
  return (
    <ScrollView style={styles.container}>
      {/* แสดงข้อความ */}
      <Text style={styles.title}>Hello from TestComponent</Text>

      {/* ช่องกรอกข้อมูล */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        autoCapitalize="words"
      />

      {/* ปุ่ม */}
      <Button
        title="Click me"
        color="purple"
        onPress={() => Alert.alert("Button clicked!")}
      />

      {/* รูปภาพ */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});