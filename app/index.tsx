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
        
        <Link href="/location" style={styles.link}>
          <Text style={styles.linkText}>Location</Text>
        </Link>
        <Link href="/book" style={styles.link}>
          <Text style={styles.linkText}>book</Text>
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
// โทนสี + ค่าคงที่เล็ก ๆ ให้โค้ดอ่านง่าย/แก้รวมที่เดียว
const palette = {
  bg: "#0f172a",
  primary: "#2563eb",
  textOnPrimary: "#ffffff", // คอนทราสต์ชัดบนปุ่มน้ำเงิน
  shadow: "#000000",
};
const radius = 16;
const spacing = { v: 16, h: 18 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: palette.bg,
  },
  link: {
    marginVertical: 14,
    marginHorizontal: 10,
    paddingVertical: spacing.v,
    paddingHorizontal: spacing.h,
    backgroundColor: palette.primary,
    borderRadius: radius,
    alignItems: "center",

    // เงา (iOS)
    shadowColor: palette.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },

    // เงา (Android)
    elevation: 6,
  },
  // ใช้คู่กับ Pressable เพื่อเอฟเฟกต์ขณะกด
  linkPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  linkText: {
    color: palette.textOnPrimary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
    textAlign: "center",
  },
});
