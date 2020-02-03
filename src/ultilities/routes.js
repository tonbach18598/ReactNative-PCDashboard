import React, { Component } from 'react'
import SplashScreen from '../screens/splash_screen'
import SigninScreen from '../screens/signin_screen'
import ForgetScreen from '../screens/forget_screen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

export default class Routes {
    static get splashRoute() { return 'Splash' }
    static get signinRoute() { return 'Signin' }
    static get forgetRoute() { return 'Forget' }
    static get dashboardRoute() { return 'Dashboard' }
    static get postRoute() { return 'Post' }
    static get editRoute() { return 'Edit' }
    static get commentRoute() { return 'Comment' }
    static get scheduleRoute() { return 'Schedule' }
    static get homeRoute() { return 'Home' }
    static get updateRoute() { return 'Update' }
    static get changeRoute() { return 'Change' }
    static get developerRoute() { return 'Developer' }
    static get userRoute() { return 'User' }
    static get signinNavigator(){ return 'SigninNavigator'}
    static get dashboardNavigator(){ return 'DashboardNavigator'}
}
const SigninNavigator = createStackNavigator(
    {
        Signin: SigninScreen,
        Forget: ForgetScreen,
    },
    {
        initialRouteName: Routes.signinRoute,
        headerMode:'none'
    }
)
const DashboardNavigator = createStackNavigator(
    {
        Splash: SplashScreen,
        SigninNavigator: SigninNavigator,
    },
    {
        initialRouteName: Routes.splashRoute,
    }
)
const AppNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        SigninNavigator: SigninNavigator,
        DashboardNavigator:DashboardNavigator
    },
    {
        initialRouteName: Routes.splashRoute,
    }
)
export const AppContainer = createAppContainer(AppNavigator)


