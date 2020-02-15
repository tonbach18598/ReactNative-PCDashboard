import React, { Component } from 'react'
import { View, Text,Dimensions, ScrollView,Image } from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'
import { Avatar } from 'react-native-elements'
import UpdateInformationTextInput from '../components/update_information_text_input'
import Colors from '../ultilities/colors'
import SigninButton from '../components/signin_button'


export default class ChangeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <CustomHeader title={Values.CHANGE_PASSWORD.toUpperCase()} left={'arrow-back'}  onPressLeft={() => { this.props.navigation.goBack() }} />
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Image style={{ width: Dimensions.get('window').width * 0.6, height: Dimensions.get('window').width * 0.4 }} source={require('../../assets/logo.png')} />

                    <View>
                        <UpdateInformationTextInput placeholder={Values.OLD_PASSWORD} icon='vpn-key' editable={false} color={Colors.lightBlue} />
                        <UpdateInformationTextInput placeholder={Values.NEW_PASSWORD} icon='lock-open' editable={true} color={Colors.orange} style={{marginTop:10, marginBottom:10}} />
                        <UpdateInformationTextInput placeholder={Values.RETYPE_PASSWORD} icon='lock-outline' editable={true} color={Colors.orange} />
                        <View style={{height:Dimensions.get('window').height/10}}/>
                        <SigninButton title={Values.CONFIRM.toUpperCase()} onPress={() => {
                        }} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}