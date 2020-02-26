import React, { Component } from 'react';
import { Image, View, ActivityIndicator, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import Routes from '../ultilities/routes'
import Colors from '../ultilities/colors'
import Preferences from '../ultilities/preferences'

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(this.checkSignin, 1000)
    }

    checkSignin = async () => {
        let token = await Preferences.loadToken()
        if (token === null || token === undefined)
            this.props.navigation.navigate(Routes.signinNavigator)
        else
            this.props.navigation.navigate(Routes.dashboardNavigator)
    }

    render() {
        return (
            <LinearGradient
                style={{ flex: 1 }}
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#ffffff', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Image style={{ width: Dimensions.get('window').width * 0.6, height: Dimensions.get('window').width * 0.4 }} source={require('../../assets/logo.png')} />
                    <View style={{ height: Dimensions.get('window').height / 10 }} />
                    <ActivityIndicator size='large' color={Colors.white} />
                </View>
            </LinearGradient>
        )
    }
}