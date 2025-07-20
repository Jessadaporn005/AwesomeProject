import React from 'react';
import { View } from 'react-native';

export default function ex08() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems:'center',justifyContent:'space-between' }}>
            <View style={{ backgroundColor: '#50E3C2', width: 100 ,height: 100, }}></View>
            <View style={{ backgroundColor: '#4A90E2', width: 100 ,height: 100, }}></View>
            <View style={{ backgroundColor: '#9013FE', width: 100 ,height: 100, }}></View>
        </View>
    );
}

