// app/index.tsx
import { useBooks } from "@/hooks/useBooks";
import { Book } from "@/utils/types";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import React, { useCallback, useLayoutEffect } from "react";
import {
    Alert,
    Button,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function BookListScreen() {
  const { books, loading, refresh, refreshing, remove, reload } = useBooks();
  const router = useRouter();
  const navigation = useNavigation();

  // set title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "รายการหนังสือ",
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      // when screen focused ensure data newest
      reload();
    }, [reload])
  );

  const handleDelete = (id: string) => {
    Alert.alert("ลบหนังสือ", "คุณแน่ใจหรือไม่ที่จะลบรายการนี้?", [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ลบ",
        style: "destructive",
        onPress: async () => {
          await remove(id);
        },
      },
    ]);
  };

  const timeAgo = (ts?: number) => {
    if (!ts) return null;
    const diff = Date.now() - ts;
    const sec = Math.floor(diff / 1000);
    if (sec < 60) return `${sec}s ago`;
    const min = Math.floor(sec / 60);
    if (min < 60) return `${min}m ago`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}h ago`;
    const day = Math.floor(hr / 24);
    return `${day}d ago`;
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/book/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.thumb} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} ฿ {item.createdAt && (
          <Text style={styles.meta}>• {timeAgo(item.createdAt)}</Text>
        )}</Text>
        <View style={styles.actions}>
          <Button
            title="Edit"
            onPress={() =>
              router.push({
                pathname: "/book/edit/[id]",
                params: { id: item.id },
              })
            }
          />
          <Button
            title="Delete"
            color="#d9534f"
            onPress={() => handleDelete(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button
        title="เพิ่มหนังสือใหม่"
        onPress={() => router.push("/book/create")}
      />
      <FlatList
        data={books}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={refresh}
        contentContainerStyle={{ paddingTop: 12, flexGrow: books.length === 0 ? 1 : 0 }}
        ListEmptyComponent={!loading ? (
          <View style={styles.empty}>
            <Text>ยังไม่มีหนังสือในรายการ — กด {"\""}เพิ่มหนังสือใหม่{"\""}</Text>
          </View>
        ) : null}
      />
      {loading && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>กำลังโหลด...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    flexDirection: "row",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  thumb: { width: 80, height: 110, backgroundColor: "#eee" },
  info: { flex: 1, padding: 8, justifyContent: "space-between" },
  title: { fontSize: 16, fontWeight: "600" },
  price: { color: "#1a8917", marginTop: 6 },
  meta: { color: '#666', fontSize: 12 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    marginTop: 8,
  },
  empty: { marginTop: 20, alignItems: "center" },
  loadingOverlay: { position: 'absolute', top: 0, left: 0, right: 0, padding: 8, alignItems: 'center' },
  loadingText: { fontSize: 12, color: '#555' }
});