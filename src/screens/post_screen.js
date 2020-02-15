import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'

export default class PostScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
            <CustomHeader
                title={Values.POST_POST.toUpperCase()}
                left={'arrow-back'}
                onPressLeft={() => { this.props.navigation.goBack() }}
                right={'file-upload'}
                onPressRight={()=>{}} />
        </View>
        )
    }
}