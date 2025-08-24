import React, { useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

type Props = {
  location: null | {
    coords?: { latitude: number; longitude: number; accuracy?: number | null; speed?: number | null };
    timestamp?: number;
  };
};

export default function MyMapView({ location }: Props) {
  const mapRef = useRef<MapView>(null);
  const hasLoc = !!location?.coords?.latitude && !!location?.coords?.longitude;

  // ถ้ายังไม่มีพิกัด → fallback กทม.
  const fallback: Region = useMemo(
    () => ({ latitude: 13.7563, longitude: 100.5018, latitudeDelta: 0.05, longitudeDelta: 0.05 }),
    []
  );

  const current: Region = hasLoc
    ? { latitude: Number(location!.coords!.latitude), longitude: Number(location!.coords!.longitude), latitudeDelta: 0.005, longitudeDelta: 0.005 }
    : fallback;

  useEffect(() => { if (hasLoc) mapRef.current?.animateToRegion(current, 600); }, [hasLoc]);

  return (
    <View style={{ flex: 1 ,marginTop:8}}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}                 // กินพื้นที่ทั้งหมด
        initialRegion={current}             // มีค่าเสมอ
        showsUserLocation
        showsMyLocationButton
        
      >
        
        {hasLoc && (
          <Marker
            coordinate={{ latitude: current.latitude, longitude: current.longitude }}
            title="ตำแหน่งฉัน"
            description={location?.timestamp ? new Date(location.timestamp).toLocaleString() : undefined}
          />
        )}
      </MapView>
    </View>
  );
}
