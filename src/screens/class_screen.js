import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'

export default class ClassScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <CustomHeader left={'arrow-back'} title={Values.THIRD_YEAR_CLASS.toUpperCase()} onPress={() => { this.props.navigation.goBack() }} />
            </View>
        )
    }
}