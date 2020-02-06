import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../ultilities/colors';

export default class CustomHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={{icon:'menu',color:Colors.white}}
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