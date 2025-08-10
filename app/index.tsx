import FlexboxMenu from "@/components/FlexboxMenu";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Flexbox Menu</Text>

      <View style={styles.container}>
        <Link href="/test-components" style={styles.link}>
          <Text style={styles.linkText}>Test Components</Text>
        </Link>
        <Link href="/test-greeting" style={styles.link}>
          <Text style={styles.linkText}>Test Greeting</Text>
        </Link>

        <FlexboxMenu />

        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>

        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>resort</Text>
        </Link>
        <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Health</Text>
        </Link>
        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </Link>
        <Link href="/chart" style={styles.link}>
          <Text style={styles.linkText}>Chart</Text>
        </Link>
        <Link href="/your-health" style={styles.link}>
          <Text style={styles.linkText}>Your Health</Text>
        </Link>
        <Link href="/todolist" style={styles.link}>
          <Text style={styles.linkText}>Todolist</Text>
        </Link>
        {/* <Link href="/Tab/profile" style={styles.link}>
  <Text style={styles.linkText}>Profile</Text>
  </Link>
  <Link href="/Tab/setting" style={styles.link}>
  <Text style={styles.linkText}>Setting</Text>
  </Link> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
