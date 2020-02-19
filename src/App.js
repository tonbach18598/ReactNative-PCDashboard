
import React, { Component } from 'react'
import {AppContainer} from './ultilities/routes'
import {Provider} from 'react-redux'
import store from './reduxs/store/store'


export default class App extends Component {
  render() {
    return (
          <AppContainer/>
    )
  }
}