import React, { Compoment, Component } from 'react'
import { Image, View, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Logo extends Component {
    render() {
        return (
            <View>

                <LinearGradient
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 3.5, opacity: 0.9 }}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#ffffff', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                        <Image style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').width / 3 }} source={require('../../assets/logo.png')} />
                    </View>
                </LinearGradient>
            </View>

        )
    }
}