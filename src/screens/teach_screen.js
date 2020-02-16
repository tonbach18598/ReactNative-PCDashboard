import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import CustomHeader from '../components/custom_header'
import { Card, Icon } from 'react-native-elements'
import Colors from '../ultilities/colors'

export default class TeachScreen extends Component {
    state = {
        schedules: [
            {
                "day": "Thứ hai",
                "subjects": [
                    {
                        "id": "a94b9bad-972a-4bfc-8ba8-78e3c1d66fc6",
                        "time": "09:20 - 11:30",
                        "subject": "Mạch điện tử & kỹ thuật số",
                        "teacherOrClass": "17VLTH",
                        "day": "Thứ hai",
                        "classId": "GV",
                        "teacherId": "0441"
                    }
                ]
            },
            {
                "day": "Thứ ba",
                "subjects": []
            },
            {
                "day": "Thứ tư",
                "subjects": [
                    {
                        "id": "9ecb06a5-87c2-4817-a4d7-6eb7c2458876",
                        "time": "12:30 - 15:00",
                        "subject": "TH Cảm biến & Đo lường",
                        "teacherOrClass": "16VLTH",
                        "day": "Thứ tư",
                        "classId": "GV",
                        "teacherId": "0441"
                    }
                ]
            },
            {
                "day": "Thứ năm",
                "subjects": [
                    {
                        "id": "5fbafe54-18f0-4bf7-ba31-a78da7e6a8f5",
                        "time": "08:30 - 10:10",
                        "subject": "TH Mạch điện tử & kỹ thuật số",
                        "teacherOrClass": "17VLTH",
                        "day": "Thứ năm",
                        "classId": "GV",
                        "teacherId": "0441"
                    }
                ]
            },
            {
                "day": "Thứ sáu",
                "subjects": []
            },
            {
                "day": "Thứ bảy",
                "subjects": []
            }
        ]
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader left='menu' onPressLeft={() => { this.props.navigation.openDrawer() }} />
                <FlatList
                    style={{ flex: 1 }}
                    ListFooterComponent={<View style={{ height: 5 }} />}
                    data={this.state.schedules}
                    renderItem={({ item }) => (
                        <Card containerStyle={{ elevation: 5, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'column',alignItems:'center' }}>
                                <Text style={{ color: Colors.blue, fontSize: 18, fontWeight: 'bold' }}>{item.day.toUpperCase()}</Text>
                                <FlatList
                                    style={{flex:1, width:'100%'}}
                                    data={item.subjects}
                                    renderItem={({ item }) => (
                                        <Card containerStyle={{ elevation: 5, borderRadius: 10 }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{flexDirection:'row',alignItems:'center', marginBottom:10}}>
                                                    <Icon name='book' color={Colors.lightBlue}/>
                                                    <Text style={{ color: Colors.black, fontSize: 16, fontWeight: 'bold', marginLeft:10 }}>{item.subject}</Text>
                                                </View>
                                                <View style={{flexDirection:'row',alignItems:'center', marginBottom:10}}>
                                                    <Icon name='timer' color={Colors.lightBlue}/>
                                                    <Text style={{ color: Colors.black, fontSize: 14, marginLeft:10 }}>{item.time}</Text>
                                                </View>
                                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                                    <Icon name='people' color={Colors.lightBlue}/>
                                                    <Text style={{ color: Colors.black, fontSize: 14, marginLeft:10 }}>{item.teacherOrClass}</Text>
                                                </View>
                                            </View>
                                        </Card>
                                    )}
                                />
                            </View>
                        </Card>
                    )}
                />
            </View>
        )
    }
}