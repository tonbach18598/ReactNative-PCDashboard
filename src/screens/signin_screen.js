import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native';
import Values from '../ultilities/values'
import Logo from '../components/logo'
import SigninTextInput from '../components/signin_text_input'
import SigninButton from '../components/signin_button'
import ForgetPasswordButton from '../components/forget_password_button'
import Routes from '../ultilities/routes';
import { NavigationActions } from 'react-navigation';

export default class SigninScreen extends Component {
    render() {
        return (
        <View style={{flexDirection:'column', width:Dimensions.get('window').width, height:Dimensions.get('window').height, alignItems:'center', justifyContent:'space-between'}}>
            <Logo/>
            <View>
                <SigninTextInput
                    icon='person'
                    placeholder={Values.ACCOUNT}
                    style={{marginTop:10, marginBottom:10}}/>
                <SigninTextInput
                    icon='lock'
                    placeholder={Values.PASSWORD}
                    style={{marginTop:10, marginBottom:20}}/>
                <ForgetPasswordButton
                    text={Values.FORGET_PASSWORD}
                    onPress={()=>this.props.navigation.push(Routes.forgetRoute)}/>
            </View>
            <View>
                <SigninButton text={Values.SIGN_IN.toUpperCase() } onPress={()=>{
                    console.log('navigate to dashboard')
                    this.props.navigation.dispatch(NavigationActions.navigate({routeName:'DashboardNavigator'}))
                    }}/>
                <View style={{width:'100%', height:Dimensions.get('window').height/10}}/>
            </View>
        </View>)
    }
}