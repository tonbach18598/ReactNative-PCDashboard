import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Routes from '../ultilities/routes';
import { Icon, ListItem } from 'react-native-elements';
import Values from '../ultilities/values';
import Colors from '../ultilities/colors';
import Configs from '../ultilities/configs';

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
          style={{ height: Dimensions.get('window').height / 4, opacity: 0.9 }}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          colors={['#448aff', '#2196f3', '#03a9f4', '#40c4ff']}>

        </LinearGradient>
        <ListItem
          onPress={this.navigateToScreen(Routes.homeRoute)}
          title={Values.HOME_PAGE}
          leftIcon={{ name: 'home', color: Colors.lightBlue }}
          bottomDivider
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.updateRoute)}
          title={Values.UPDATE_INFORMATION}
          leftIcon={{ name: 'account-circle', color: Colors.lightBlue }}
          bottomDivider
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.changeRoute)}
          title={Values.CHANGE_PASSWORD}
          leftIcon={{ name: 'settings', color: Colors.lightBlue }}
          bottomDivider
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.developerRoute)}
          title={Values.DEVELOPER}
          leftIcon={{ name: 'react-native-outline', color: Colors.lightBlue }}
          bottomDivider
        />
        <ListItem
          onPress={this.navigateToScreen(Routes.signinNavigator)}
          title={Values.SIGN_OUT}
          leftIcon={{ name: 'exit-to-app', color: Colors.lightBlue }}
          bottomDivider
        />
        <Text>{Configs.currentVersion}</Text>
      </View>
    );
  }
}

CustomDrawer.propTypes = {
  navigation: PropTypes.object
};