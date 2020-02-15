import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'
import Colors from '../ultilities/colors'
import { Card, Avatar } from 'react-native-elements'

export default class UserScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    userId: '1613013'
                },
                {
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    userId: '1613013'
                },
                {
                    name: 'Bùi Ngô Tôn Bách',
                    avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    userId: '1613013'
                },
                
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.THIRD_YEAR_LIST.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <FlatList
                    style={{ flex: 1, paddingBottom: 50 }}
                    data={this.state.users}
                    ListFooterComponent={<View style={{ height: 5 }} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Card containerStyle={{ elevation: 5, borderRadius: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Avatar
                                        rounded
                                        size='medium'
                                        source={{ uri: item.avatar }} />
                                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, color: Colors.blue, fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text style={{ fontSize: 14, color: Colors.deepOrangeAccent, fontWeight: 'bold', marginTop: 5 }}>{item.userId}</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}