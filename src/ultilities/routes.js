import React, { Component } from 'react'
import SplashScreen from '../screens/splash_screen'
import SigninScreen from '../screens/signin_screen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

export default class Routes {
    static get splashRoute() { return 'splash' }
    static get signinRoute() { return 'signin' }
    static get forgetRoute() { return 'forget' }
    static get dashboardRoute() { return 'dashboard' }
    static get postRoute() { return 'post' }
    static get editRoute() { return 'edit' }
    static get commentRoute() { return 'comment' }
    static get scheduleRoute() { return 'schedule' }
    static get homeRoute() { return 'home' }
    static get updateRoute() { return 'update' }
    static get changeRoute() { return 'change' }
    static get developerRoute() { return 'developer' }
    static get userRoute() { return 'user' }
}

const AppNavigator = createStackNavigator(
    {
        splash: SplashScreen,
        signin: SigninScreen,
    },
    {
        initialRouteName: Routes.splashRoute,
        headerMode: 'none'
    }
)
export const AppContainer = createAppContainer(AppNavigator)


