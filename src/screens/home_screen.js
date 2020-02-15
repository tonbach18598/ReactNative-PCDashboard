import React, {Component} from 'react'
import {View} from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'
import Configs from '../ultilities/configs'
import WebView from 'react-native-webview'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'column'}}>
                <CustomHeader title={Values.HOME_PAGE.toUpperCase()} left={'arrow-back'} onPressLeft={()=>{this.props.navigation.goBack()}}/>
                <WebView source={{uri:Configs.homeUrl}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={true}
                />
            </View>
        )
    }
}