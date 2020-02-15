import React, { Component } from 'react'
import { View, Text, Dimensions,TextInput, FlatList } from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../ultilities/colors'
import { Button, Icon, Avatar } from 'react-native-elements'

export default class CommentScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:[
                {
                    avatar:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    name:'Bùi Ngô Tôn Bách',
                    content:'Ứng dụng tuyệt vời',
                    time:'10/02/2020 19:02'
                },
                {
                    avatar:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    name:'Bùi Ngô Tôn Bách',
                    content:'Ứng dụng tuyệt vời',
                    time:'10/02/2020 19:02'
                },
                {
                    avatar:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    name:'Bùi Ngô Tôn Bách',
                    content:'Ứng dụng tuyệt vờidsfdsfdsfdsfsdfsdfsfsdfdsfdsfdsdfsdf fdfdsfdsf sdfdsf dsf dsf ds',
                    time:'10/02/2020 19:02'
                },
                {
                    avatar:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/79999145_1334532736719488_3223710544372432896_o.jpg?_nc_cat=105&_nc_ohc=k9BZY_K86JcAX8CrlnM&_nc_ht=scontent.fsgn5-2.fna&oh=cf6bee80b31aeca610d282fd9158f950&oe=5EC1FE2A',
                    name:'Bùi Ngô Tôn Bách',
                    content:'Ứng dụng tuyệt vời',
                    time:'10/02/2020 19:02'
                },
               
            ]
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.COMMENT.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <FlatList 
                style={{flex:1}}
                keyExtractor={item=>item.id}
                ListFooterComponent={<View style={{height:5}}/>}
                data={this.state.comments}
                    renderItem={({ item }) => (
                        <View style={{flexDirection:'row', marginTop:5, marginBottom:4, marginLeft:10, marginRight:10}}>
                            <View style={{marginTop:10, marginRight:10}}>
                                <Avatar
                                rounded
                                size='small'
                                source={{ uri: item.avatar }} />
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <View style={{backgroundColor:Colors.grey300, maxWidth:Dimensions.get('window').width*0.7, borderRadius:15, paddingTop:10, paddingBottom:10, paddingLeft:15, paddingRight:15}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:Colors.blue}}>{item.name}</Text>
                                    <Text style={{fontSize:14}}>{item.content}</Text>
                                </View>
                                <Text style={{fontSize:12, color:Colors.grey, marginTop:5, marginLeft:15}}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />
                    <LinearGradient
                        style={{ width: Dimensions.get('window').width }}
                        start={{ x: 1.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={{ flex: 5, borderRadius: 20, backgroundColor: Colors.white, marginLeft: 20,marginRight:10, marginTop: 10, marginBottom: 10, paddingLeft: 20, paddingRight:20 }}>
                                <TextInput
                                    multiline
                                    style={{ fontSize: 16, justifyContent: 'center', maxHeight:80, ...Platform.select({ ios: { marginTop: 15, marginBottom: 15 } }) }}
                                    placeholder={Values.ENTER_CONTENT}
                                    selectionColor={Colors.orange}>
                                </TextInput>
                            </View>
                            <View style={{flex:1, flexWrap:'wrap'}}>
                                <Button icon={<Icon name='send' color={Colors.white} size={30} />} type="clear" onPress={() => { }} />
                            </View>
                        </View>
                    </LinearGradient>
            </View>
        )
    }
}