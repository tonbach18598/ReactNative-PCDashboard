import React, { Component } from 'react';
import { Image, View, TextInput, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SigninButton from '../components/signin_button';
import Value from '../ultilities/values'
import Values from '../ultilities/values';
import SigninInputText from '../components/signin_text_input';

export default class SplashScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <LinearGradient
                    style={{ flex: 1 }}
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.5, y: 1.0 }}
                    colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#ffffff', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                    <Image style={{ width: 200, height: 200 }} source={require('../../assets/logo.png')} />
                </LinearGradient>
                <View style={{ flex: 1 , alignItems:'center'}}>
                    <SigninInputText placeholder={Values.ACCOUNT} />
                    <SigninInputText placeholder={Values.PASSWORD} />
                
                </View>
                <View  style={{ flex: 1 }}>
                <SigninButton
                    text={Values.SIGN_IN.toUpperCase()} />
                </View>
            </View>
        )
    }
}