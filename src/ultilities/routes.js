import React,{ Component } from "react";
import SplashScreen from "../screens/splash_screen";
import SigninScreen from "../screens/signin_screen";
import Router from "react-native-router-flux"

export default class Routes extends Component{
    static splashRoute='/';
    static signinRoute='/signin';
    static forgetRoute='/forget';
    static dashboardRoute='/dashboard';
    static postRoute='/post';
    static editRoute='/edit';
    static commentRoute='/comment';
    static scheduleRoute='/schedule';
    static homeRoute='/home';
    static updateRoute='/update';
    static changeRoute='/change';
    static developerRoute='/developer';
    static userRoute='/user';
    render(){
        return(
            <Router>
                <Stack key={splashRoute}>
                    <Scene key={splashRoute} component={SplashScreen} />
                    <Scene key={signinRoute} component={SigninScreen}/>
                </Stack>
            </Router>
        );
    }
}