import React from 'react';
import { View } from 'react-native';

export default function ex12() {
    return (
        <View style={{ flex: 3, flexDirection: 'row', justifyContent:'space-between'}}>
            <View style={{flex:1, backgroundColor: '#50E3C2'}}></View>
            <View style={{flex:1, backgroundColor: '#4A90E2'}}></View>
            <View style={{flex:1, backgroundColor: '#9013FE'}}></View>
        </View>
    );
}

