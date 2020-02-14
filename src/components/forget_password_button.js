import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../ultilities/colors'

const ForgetPasswordButton = ({ title, onPress }) => (
    <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={onPress}>
            <Text style={{ fontSize: 16, color: Colors.grey, fontWeight: 'bold', alignSelf: 'flex-end', flexWrap: 'wrap' }}>{title}</Text>
        </TouchableOpacity>
    </View>
)

export default ForgetPasswordButton