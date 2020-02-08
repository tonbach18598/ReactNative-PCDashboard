import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../components/custom_header'

export default class ChangeScreen extends Component{
    render(){
        return(
            <View>
                <CustomHeader leftIcon={'arrow-back'} title={Values.UPDATE_INFORMATION.toUpperCase()} onPress={()=>{this.props.navigation.goBack()}}/>
            </View>
        )
    }
}