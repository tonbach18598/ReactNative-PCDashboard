import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Values from '../ultilities/values'
import {Icon} from 'react-native-elements'
import CustomHeader from '../components/custom_header'

export default class DepartmentScreen extends Component{
    

    render() {
        return (
            <View>
                <CustomHeader leftIcon='menu' onPress={()=>{this.props.navigation.openDrawer()}}/>
            </View>
        );
    }
}