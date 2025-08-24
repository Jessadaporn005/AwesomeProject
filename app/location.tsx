// app/location.tsx
import MyMapView from "@/components/week10/MyMapView";
import { getLocation } from "@/utils/GPS"; // ใช้ฟังก์ชันของเธอ
import * as ExpoLocation from "expo-location"; // ใช้ type จาก expo-location
import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Location() {
  // ให้ type ชัดเจน: อาจเป็น LocationObject หรือ null
  const [location, setLocation] = useState<ExpoLocation.LocationObject | null>(
    null
  );

  const onLoad = async () => {
    const loc = await getLocation();
    if (loc) setLocation(loc as ExpoLocation.LocationObject);
  };

  useEffect(() => {
    onLoad();
  }, []);

  // ช่วยคำนวณค่าให้ปลอดภัย (speed อาจเป็น null/undefined)
  const speedKmh =
    location?.coords?.speed != null
      ? (Number(location.coords.speed) * 3.6).toFixed(0)
      : "-";

  const accuracyM =
    location?.coords?.accuracy != null
      ? Number(location.coords.accuracy).toFixed(0)
      : "-";

  return (
    <>
      <Stack.Screen
        options={{
          title: "Location",
          headerShown: true,
          headerRight: () => (
            <Link href="/location-quiz" asChild>
              <Pressable style={{ paddingHorizontal: 12, paddingVertical: 6 }}>
                <Text style={{ color: "#e11d48", fontWeight: "600" }}>
                  Quiz
                </Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <View style={{ flex: 1, padding: 12 }}>
        <Text>{location ? new Date(location.timestamp).toString() : "-"}</Text>

        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: "#50E3C2",
            marginTop: 8,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>Lat/Lon</Text>
            <Text style={{ textAlign: "center" }}>
              {location?.coords?.latitude ?? "-"}
            </Text>
            <Text style={{ textAlign: "center" }}>
              {location?.coords?.longitude ?? "-"}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>Speed / Accuracy</Text>
            <Text style={{ textAlign: "center" }}>{speedKmh} km/h</Text>
            <Text style={{ textAlign: "center" }}>{accuracyM} m.</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1,marginTop: 8 }}>
        <MyMapView location={location} />
      </View>
    </>
  );
}
