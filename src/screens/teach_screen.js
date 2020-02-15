import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../components/custom_header'

export default class TeachScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <CustomHeader left='menu' onPressLeft={()=>{this.props.navigation.openDrawer()}}/>
            </View>
        )
    }
}