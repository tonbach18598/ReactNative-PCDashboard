import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../ultilities/colors';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-native-elements';

export default class CustomHeader extends Component {

  constructor(props) {
    super(props);
}

  render() {
    return (
      <Header
        statusBarProps={{translucent:true}}
        leftComponent={<Button icon={<Icon name={this.props.leftIcon} color={Colors.white}/>} type="clear" onPress={this.props.onPress} />}
        centerComponent={{ text: this.props.title, style: { color: Colors.white,fontWeight:'bold' } }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          start:{ x: 0.0, y: 0.0 },
          end:{ x: 0.0, y: 1.0 },
          colors:['#448aff','#2196f3','#03a9f4','#40c4ff']
  }}
      />
    )
  }
}

CustomHeader.propTypes = { leftIcon: PropTypes.string.isRequired, title: PropTypes.string, onPress:PropTypes.func.isRequired }