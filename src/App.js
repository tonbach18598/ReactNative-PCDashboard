
import React, { Component } from 'react'
import {AppContainer} from './ultilities/routes'
import {Provider} from 'react-redux'
import store from './redux/store/index'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppContainer/>

      </Provider>
    )
  }
}