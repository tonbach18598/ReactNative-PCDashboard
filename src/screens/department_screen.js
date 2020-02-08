import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'

export default class DepartmentScreen extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: "Memory",
        headerLeft: (
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),

    })

    render() {
        return (
            <View >
                <Text>Memory Settings</Text>
                <Icon name="memory" size={48} />

            </View>
        );
    }
}