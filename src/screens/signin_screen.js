import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native';
import Values from '../ultilities/values'
import Colors from '../ultilities/colors'
import Logo from '../components/logo'
import SigninTextInput from '../components/signin_text_input'
import SigninButton from '../components/signin_button'
import ForgetPasswordButton from '../components/forget_password_button'
export default class SigninScreen extends Component {
    render() {
        return (
        <View style={{flexDirection:'column', width:Dimensions.get('window').width, height:Dimensions.get('window').height, alignItems:'center', justifyContent:'space-between'}}>
            <Logo/>
            <View>
                <SigninTextInput placeholder={Values.ACCOUNT}/>
                <SigninTextInput placeholder={Values.PASSWORD}/>
                <ForgetPasswordButton text={Values.FORGET_PASSWORD}/>
            </View>
            <View>
                <SigninButton text={Values.SIGN_IN.toUpperCase() } onPress={()=>{}}/>
                <View style={{width:'100%', height:Dimensions.get('window').height/10}}/>
            </View>
        </View>)
    }
}