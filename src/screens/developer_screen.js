import React, { Component } from 'react'
import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import CustomHeader from '../components/custom_header'
import Colors from '../ultilities/colors'
import Values from '../ultilities/values'

export default class DeveloperScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <CustomHeader title={Values.DEVELOPER.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', marginLeft:10, marginRight:10 }}>
                    <Image style={{ width: Dimensions.get('window').height / 3.2, height: Dimensions.get('window').height / 4.8 }} source={require('../../assets/logo.png')} />
                    <View style={{ height: Dimensions.get('window').height / 30 }} />
                    <Text style={{ fontSize: 22, color: Colors.black, fontStyle: 'italic', textAlign: 'justify' }}>
                        <Text style={{ fontSize: 24, color: Colors.blue, fontWeight: 'bold', fontStyle: 'normal' }}>
                            P
                                <Text style={{ fontSize: 18, color: Colors.blue, fontWeight: 'bold' }}>
                                &amp;
                            </Text>
                            C Dashboard Teacher &nbsp;
                            </Text>
                        là ứng dụng quản lý và hỗ trợ giảng dạy dành cho giảng viên bộ môn Vật lý Tin học.
                        </Text>
                    <View style={{ height: Dimensions.get('window').height / 30 }} />
                    <Text style={{ fontSize: 22, color: Colors.black, fontStyle: 'italic', textAlign: 'justify' }}>
                        Ứng dụng được viết trên nền tảng &nbsp;
                            <Text style={{ fontSize: 24, color: Colors.deepOrange, fontWeight: 'bold', fontStyle: 'normal' }}>
                            React Native &nbsp;
                                 <Text style={{ fontSize: 22, color: Colors.black, fontStyle: 'italic', fontWeight: 'normal' }}>
                                bằng ngôn ngữ &nbsp;
                                </Text>
                            JavaScript
                            </Text>
                        .
                        </Text>
                    <View style={{ height: Dimensions.get('window').height / 30 }} />
                    <Text style={{ fontSize: 22, color: Colors.black, fontStyle: 'italic', textAlign: 'justify' }}>
                        Đây là đề tài khoá luận tốt nghiệp của sinh viên &nbsp;
                            <Text style={{ fontSize: 24, color: Colors.blue, fontWeight: 'bold', fontStyle: 'normal' }}>
                            Bùi Ngô Tôn Bách
                            </Text>
                        , khoá K16.
                        </Text>
                </ScrollView>
            </View>
        )
    }
}