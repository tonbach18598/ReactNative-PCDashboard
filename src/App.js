
import React, { Component } from "react"
import Routes from "./ultilities/routes";
import SplashScreen from "./screens/splash_screen";
import SigninScreen from "./screens/signin_screen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}

const AppContainer = createAppContainer(AppNavigator);
const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Signin: SigninScreen,
  },
  {
    initialRouteName: 'Splash',
  }
);