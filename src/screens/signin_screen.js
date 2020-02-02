import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Values from '../ultilities/values'
import Colors from '../ultilities/colors'

export default class SigninScreen extends Component {
    render() {
        return (
        <View>
            <Text style={{color:Colors.black}}>{Values.CANCEL}</Text>
        </View>);
    }
}