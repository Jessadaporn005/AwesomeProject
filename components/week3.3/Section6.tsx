import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ paddingBottom: 10 }}>
                <Text style={{ fontSize: 20, textAlign: 'left', marginBottom: 5 }}>
                    Location
                </Text>
                <Text style={{ fontSize: 14, color: '#000', textAlign: 'left' }}>
                   218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
                </Text>
            </View>

            {/* View ก้อนที่ 2 */}
            <View style={{}}>
                <Image
                    style={{
                        width: '100%',
                        resizeMode: 'cover',
                        
                        borderRadius: 10,
                    }}
                    source={require("@/assets/week3/map.jpg")}
                />
            </View>
        </View>
    );
}
