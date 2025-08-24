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
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0f172a", // เพิ่มพื้นหลังเข้มหน่อย จะทำให้ปุ่มเด่นขึ้น
  },
  link: {
    marginVertical: 25,
    marginHorizontal: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#2563eb", // น้ำเงินสด
    borderRadius: 12,           // มนขึ้น ดูโมเดิร์นกว่า
    shadowColor: "#000",        // เงาเบา ๆ
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  linkText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "600", 
    letterSpacing: 0.3,
    textAlign: "center" 
  },
});

  