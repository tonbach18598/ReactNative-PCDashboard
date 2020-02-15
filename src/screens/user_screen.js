import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'

export default class UserScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <CustomHeader left={'arrow-back'} title={Values.THIRD_YEAR_LIST.toUpperCase()} onPress={() => { this.props.navigation.goBack() }} />
            </View>
        )
    }
}