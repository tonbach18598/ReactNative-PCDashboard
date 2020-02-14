import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../components/custom_header'

export default class ContactScreen extends Component{
    render(){
        return(
            <View>
                <CustomHeader left='menu' onPress={()=>{this.props.navigation.openDrawer()}}/>
            </View>
        )
    }
}