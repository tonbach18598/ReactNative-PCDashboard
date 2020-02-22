import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'
import Colors from '../ultilities/colors'
import { Card, Avatar, Button, Icon, Header } from 'react-native-elements'
import Routes from '../ultilities/routes'
import Configs from '../ultilities/configs'
import Axios from 'axios'
import Optional from 'react-native-optional'
import { connect } from 'react-redux'
import {saveClassPosts} from '../redux/actions/class_action'

class ClassScreen extends Component {

    componentDidMount(){
        this.props.fetchData(10,'K16')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.THIRD_YEAR_CLASS.toUpperCase()} left={'arrow-back'}  onPressLeft={() => { this.props.navigation.goBack() }} />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate(Routes.postRoute)}}>
                    <View style={{ height: 56, backgroundColor: Colors.grey200, flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                        {/* <Avatar
                            rounded
                            size='small'
                            source={{ uri: this.state.posts[0].userAvatar }} /> */}
                        <View style={{ flex: 1, backgroundColor: Colors.white, borderRadius: 25, height: 36, marginLeft: 20, justifyContent:'center', alignItems:'center' }}>
                            <Text style={{ color: Colors.grey }}>{Values.SHARE_YOUR_THINKING}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <FlatList
                    style={{ flex: 1 }}
                    keyExtractor={item=>item.id}
                    ListFooterComponent={<View style={{height:5}}/>}
                    data={this.props.posts}
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
                                            source={{ uri: item.userAvatar }} />
                                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                            <Text style={{ fontSize: 16, color: Colors.blue, fontWeight: 'bold' }}>{item.userName}</Text>
                                            <Text style={{ fontSize: 12, color: Colors.grey, marginTop: 5 }}>{item.time}</Text>
                                        </View>
                                    </View>

                                    <Button icon={<Icon name='more-horiz' color={Colors.lightBlue} />} type='clear' />
                                </View>
                                <Text style={{ fontSize: 14, marginTop: 10, marginBottom: 5 }}>{item.content}</Text>
                                <Optional test={item.image!==null}>
                                <Image style={{ width: '100%', height: 200, marginTop: 5, borderRadius: 10 }}
                                    source={{ uri: item.image }} />
                                </Optional>
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

const mapStateToProps=(state)=>{
    console.log('updated state')
    console.log(state.classPosts)
    return {
        posts:state.classPosts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchData:(number,classId)=>{
            dispatch(saveClassPosts(number,classId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassScreen)