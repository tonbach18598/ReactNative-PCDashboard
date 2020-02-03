import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native';
import Values from '../ultilities/values'
import Logo from '../components/logo'
import SigninTextInput from '../components/signin_text_input'
import SigninButton from '../components/signin_button'
import ForgetPasswordButton from '../components/forget_password_button'
import Routes from '../ultilities/routes';
export default class ForgetScreen extends Component {
    render() {
        return (
        <View style={{flexDirection:'column', width:Dimensions.get('window').width, height:Dimensions.get('window').height, alignItems:'center', justifyContent:'space-between'}}>
            <Logo/>
            <View>
                <SigninTextInput
                    icon='person'
                    placeholder={Values.ACCOUNT}
                    style={{marginTop:10, marginBottom:15}}/>
                <ForgetPasswordButton style={{marginRight:20}}text={Values.BACK} onPress={()=>this.props.navigation.goBack()}/>
            </View>
            <View>
                <SigninButton text={Values.GET_PASSWORD.toUpperCase() } onPress={()=>{}}/>
                <View style={{width:'100%', height:Dimensions.get('window').height/10}}/>
            </View>
        </View>)
    }
}