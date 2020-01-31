import React, { Component } from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class SplashScreen extends Component {
  render() {
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#ffffff', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
        <Text>dsadsada</Text>
      </LinearGradient>
    )
  }
}