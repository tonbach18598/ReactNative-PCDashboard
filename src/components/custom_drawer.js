import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Routes from '../ultilities/routes';
import { ListItem } from 'react-native-elements';
import Values from '../ultilities/values';
import Colors from '../ultilities/colors';
import Configs from '../ultilities/configs';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import QRCode from 'react-native-qrcode-svg';
import Preferences from '../ultilities/preferences';
import { connect } from 'react-redux';
import { loadSelf } from '../redux/actions/self_action'
import Optional from 'react-native-optional'
import FastImage from 'react-native-fast-image'

class CustomDrawer extends Component {

  navigateToScreen = (routeName) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: routeName
    })
    this.props.navigation.dispatch(navigateAction)
  }

  onSignout = () => async () => {
    await Preferences.clearAll()
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: Routes.signinNavigator
    }))
  }

  componentDidMount() {
    this.props.initSelf()
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <LinearGradient
          style={{ height: 160 + getStatusBarHeight(), marginBottom: 10 }}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          colors={['#448aff', '#2196f3', '#03a9f4', '#40c4ff']}>
          <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'column', paddingLeft: 20 }}>
            <Optional test={this.props.self.avatar !== null}>
            <FastImage
              style={{ width: 70, height: 70, borderRadius: 35 }}
              source={{ uri: this.props.self.avatar }} />
            </Optional>
            <Optional test={this.props.self.name !== null}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.white, marginTop: 10 }}>{this.props.self.name.toUpperCase()}</Text>
            </Optional>
            <Optional test={this.props.self.userId !== null}>
              <Text style={{ color: Colors.white, marginBottom: 20 }}>{this.props.self.userId}</Text>
            </Optional>
          </View>
        </LinearGradient>
        <ListItem
          onPress={this.navigateToScreen(Routes.homeRoute)}
          title={Values.HOME_PAGE}
          titleStyle={{ fontSize: 14, fontWeight: 'bold' }}
          leftIcon={{ name: 'home', color: Colors.lightBlue }} />
        <ListItem
          onPress={this.navigateToScreen(Routes.updateRoute)}
          title={Values.UPDATE_INFORMATION}
          titleStyle={{ fontSize: 14, fontWeight: 'bold' }}
          leftIcon={{ name: 'account-circle', color: Colors.lightBlue }} />
        <ListItem
          onPress={this.navigateToScreen(Routes.changeRoute)}
          title={Values.CHANGE_PASSWORD}
          titleStyle={{ fontSize: 14, fontWeight: 'bold' }}
          leftIcon={{ name: 'settings', color: Colors.lightBlue }} />
        <ListItem
          onPress={this.navigateToScreen(Routes.developerRoute)}
          title={Values.DEVELOPER}
          titleStyle={{ fontSize: 14, fontWeight: 'bold' }}
          leftIcon={{ name: 'developer-mode', color: Colors.lightBlue }} />
        <ListItem
          onPress={
            this.onSignout()
          }
          title={Values.SIGN_OUT}
          titleStyle={{ fontSize: 14, fontWeight: 'bold' }}
          leftIcon={{ name: 'exit-to-app', color: Colors.lightBlue }} />
        <ListItem
          title={Configs.currentVersion}
          titleStyle={{ fontSize: 14, fontStyle: 'italic', color: Colors.grey }} />
        <View style={{ paddingLeft: 20, paddingTop: 10 }}>
          <QRCode value='1613013'
            size={100}
            logo={require('../../assets/logo.png')}
            logoSize={30} />
        </View>
      </View>
    );
  }
}

CustomDrawer.propTypes = {
  navigation: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    self: state.self
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initSelf: () => {
      dispatch(loadSelf())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)


