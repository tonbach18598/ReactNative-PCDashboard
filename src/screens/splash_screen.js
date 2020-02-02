import React, { Component } from 'react';
import { Image, View, TextInput, TouchableOpacity, Text, ActivityIndicator, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SigninButton from '../components/signin_button';
import Value from '../ultilities/values'
import Values from '../ultilities/values';
import SigninInputText from '../components/signin_text_input';

export default class SplashScreen extends Component {

    render() {
        return (
                <LinearGradient
                    style={{ flex: 1 }}
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.5, y: 1.0 }}
                    colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#ffffff', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                        <Image style={{ width: Dimensions.get('window').width*0.6, height: Dimensions.get('window').width*0.4 }} source={require('../../assets/logo.png')} />
                        <View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.06}}/>
                        <ActivityIndicator size='large' color='white'/>
                    </View>
                </LinearGradient>
        )
    }
}