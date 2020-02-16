import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'
import Colors from '../ultilities/colors'
import { Card, Avatar, Button, Icon, Header } from 'react-native-elements'
import Routes from '../ultilities/routes'

export default class ClassScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {
                    id: 1,
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    image: '',
                    time: '10:30 18/05/2020',
                    content: 'Thông báo nghỉ vì dịch Corona'
                },
                {
                    id: 2,
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    image: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent.fsgn5-4.fna&oh=f982bf20427bdba3db6064ce5a05febe&oe=5EB7A828',
                    time: '10:30 18/05/2020',
                    content: 'Thông báo nghỉ vì dịch Corona'
                },
                {
                    id: 3,
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    image: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent.fsgn5-4.fna&oh=f982bf20427bdba3db6064ce5a05febe&oe=5EB7A828',
                    time: '10:30 18/05/2020',
                    content: 'Thông báo nghỉ vì dịch Corona'
                },
                {
                    id: 4,
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    image: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent.fsgn5-4.fna&oh=f982bf20427bdba3db6064ce5a05febe&oe=5EB7A828',
                    time: '10:30 18/05/2020',
                    content: 'Thông báo nghỉ vì dịch Corona'
                },
                {
                    id: 5,
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    image: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent.fsgn5-4.fna&oh=f982bf20427bdba3db6064ce5a05febe&oe=5EB7A828',
                    time: '10:30 18/05/2020',
                    content: 'Thông báo nghỉ vì dịch Corona'
                }
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.THIRD_YEAR_CLASS.toUpperCase()} left={'arrow-back'}  onPressLeft={() => { this.props.navigation.goBack() }} />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate(Routes.postRoute)}}>
                    <View style={{ height: 56, backgroundColor: Colors.grey200, flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                        <Avatar
                            rounded
                            size='small'
                            source={{ uri: this.state.posts[0].avatar }} />
                        <View style={{ flex: 1, backgroundColor: Colors.white, borderRadius: 25, height: 36, marginLeft: 20, justifyContent:'center', alignItems:'center' }}>
                            <Text style={{ color: Colors.grey }}>{Values.SHARE_YOUR_THINKING}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <FlatList
                    style={{ flex: 1 }}
                    keyExtractor={item=>item.id}
                    ListFooterComponent={<View style={{height:5}}/>}
                    data={this.state.posts}
                    renderItem={({ item }) => (
                        <Card containerStyle={{ borderRadius: 10,...Platform.select({
                            ios: {
                                shadowColor: Colors.grey,
                                shadowOffset: { height: 1, width: 1 },
                                shadowOpacity: 0.8,
                                shadowRadius: 5
                            },
                            android: {
                                elevation: 5
                            }
                        }) }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Avatar
                                            rounded
                                            size='small'
                                            source={{ uri: item.avatar }} />
                                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                            <Text style={{ fontSize: 16, color: Colors.blue, fontWeight: 'bold' }}>{item.name}</Text>
                                            <Text style={{ fontSize: 12, color: Colors.grey, marginTop: 5 }}>{item.time}</Text>
                                        </View>
                                    </View>

                                    <Button icon={<Icon name='more-horiz' color={Colors.lightBlue} />} type='clear' />
                                </View>
                                <Text style={{ fontSize: 14, marginTop: 10, marginBottom: 5 }}>{item.content}</Text>
                                <Image style={{ width: '100%', height: 200, marginTop: 5, borderRadius: 10 }}
                                    source={{ uri: item.image }} />
                                <TouchableOpacity style={{ marginTop: 15 }} onPress={()=>{this.props.navigation.navigate(Routes.commentRoute)}}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Icon name='comment' color={Colors.lightBlue} />
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 5 }}>{Values.COMMENT}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    )}
                />
            </View>
        )
    }
}