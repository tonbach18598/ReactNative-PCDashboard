import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Routes from '../ultilities/routes';
import { Icon, ListItem } from 'react-native-elements';
import Values from '../ultilities/values';
import Colors from '../ultilities/colors';
import Configs from '../ultilities/configs';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export default class CustomDrawer extends Component {
  navigateToScreen = (routeName) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: routeName
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <LinearGradient
          style={{ height: 160+getStatusBarHeight() }}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          colors={['#448aff', '#2196f3', '#03a9f4', '#40c4ff']}>

        </LinearGradient>
        <ListItem
          onPress={this.navigateToScreen(Routes.homeRoute)}
          title={Values.HOME_PAGE}
          titleStyle={{fontSize:14, fontWeight:'bold'}}
          leftIcon={{ name: 'home', color: Colors.lightBlue }}
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.updateRoute)}
          title={Values.UPDATE_INFORMATION}
          titleStyle={{fontSize:14, fontWeight:'bold'}}
          leftIcon={{ name: 'account-circle', color: Colors.lightBlue }}
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.changeRoute)}
          title={Values.CHANGE_PASSWORD}
          titleStyle={{fontSize:14, fontWeight:'bold'}}
          leftIcon={{ name: 'settings', color: Colors.lightBlue }}
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.developerRoute)}
          title={Values.DEVELOPER}
          titleStyle={{fontSize:14, fontWeight:'bold'}}
          leftIcon={{ name: 'developer-mode', color: Colors.lightBlue }}
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.signinNavigator)}
          title={Values.SIGN_OUT}
          titleStyle={{fontSize:14, fontWeight:'bold'}}
          leftIcon={{ name: 'exit-to-app', color: Colors.lightBlue }}
        />
        <ListItem
          title={Configs.currentVersion}
          titleStyle={{fontSize:14, fontStyle:'italic', color:Colors.grey}}
        />
      </View>
    );
  }
}

CustomDrawer.propTypes = {
  navigation: PropTypes.object
};