// app/location.tsx  (หรือ app/(tabs)/location.tsx ถ้าอยู่ในแท็บ)
import { Link, Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Locationquiz() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Locationquiz',
          headerShown: true, // เปิดหัวสำหรับหน้านี้ (สำคัญ ถ้ากลางๆ เคยปิดไว้)
          headerRight: () => (
            <Link href="/home" asChild>
              <Pressable style={{ paddingHorizontal: 12, paddingVertical: 6 }}>
                <Text style={{ color: '#e11d48', fontWeight: '600' }}>Home</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <View style={{ flex: 1 }}>
        {/* UI ของหน้า */}
      </View>
    </>
  );
}
