import React, {Component} from 'react'
import {View, Text, Button, Platform} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'


export default class UpdateScreen extends Component{
    render(){
        return(
            <View>
                <CustomHeader leftIcon={'arrow-back'} title={Values.UPDATE_INFORMATION.toUpperCase()} onPress={()=>{this.props.navigation.goBack()}}/>
            </View>
        )
    }
}