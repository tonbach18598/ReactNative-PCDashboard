import React from 'react'
import { Image, View, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Wave from 'react-native-waveview'
import Colors from '../ultilities/colors'

const Logo = () => (
    <View style={{justifyContent:"center", alignItems:'center'}}>
        {/* <LinearGradient
            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 3.5, opacity: 0.9 }}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#ffffff', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                <Image style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').width / 3 }} source={require('../../assets/logo.png')} />
            </View>
        </LinearGradient> */}
        <Wave style={{
            width: Dimensions.get('window').width, height: Dimensions.get('window').height/3.5}}
            waveParams={[
                {A: 100, T: 300, fill: Colors.blueAccent},
                {A: 90, T: 280, fill: Colors.blue},
                {A: 80, T: 260, fill: Colors.lightBlue},
                {A: 70, T: 240, fill: Colors.lightBlueAccent},
                {A: 60, T: 220, fill: Colors.white},
                {A: 50, T: 200, fill: Colors.orangeAccent},
                {A: 40, T: 180, fill: Colors.orange},
                {A: 30, T: 160, fill: Colors.deepOrangeAccent},
                {A: 20, T: 140, fill: Colors.deepOrange},
            ]}
            H={50}
            P={0}
            animated={true}
        />
            <Image style={{ width: Dimensions.get('window').width / 2, height: Dimensions.get('window').width / 3, position:"absolute" }} source={require('../../assets/logo.png')} />
    </View>
    )

export default Logo