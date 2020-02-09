import React, { Component } from 'react'
import { View, Text,Dimensions, ScrollView } from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'
import { Avatar } from 'react-native-elements'
import UpdateInformationTextInput from '../components/update_information_text_input'
import Colors from '../ultilities/colors'
import SigninButton from '../components/signin_button'


export default class UpdateScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <CustomHeader leftIcon={'arrow-back'} title={Values.UPDATE_INFORMATION.toUpperCase()} onPress={() => { this.props.navigation.goBack() }} />
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <Avatar
                            rounded
                            size='xlarge'
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                        <Text style={{ fontSize: 24, color: Colors.blue, fontWeight: 'bold', paddingTop:20, paddingBottom:5 }}>Bùi Ngô Tôn Bách</Text>
                        <Text style={{ fontSize: 20, color: Colors.deepOrangeAccent, fontWeight: 'bold' }}>1613013</Text>
                    </View>
                    <View>
                        <UpdateInformationTextInput placeholder={Values.CLASS} icon='people' editable={false} primaryColor={Colors.lightBlue} />
                        <UpdateInformationTextInput placeholder={Values.EMAIL} icon='mail' editable={true} primaryColor={Colors.orange} style={{marginTop:10, marginBottom:10}} />
                        <UpdateInformationTextInput placeholder={Values.PHONE} icon='smartphone' editable={true} primaryColor={Colors.orange} />
                        <View style={{height:Dimensions.get('window').height/10}}/>
                        <SigninButton text={Values.CONFIRM.toUpperCase()} onPress={() => {
                        }} />
                    </View>
                    <View style={{height:Dimensions.get('window').height/10}}/>

                </ScrollView>
            </View>
        )
    }
}