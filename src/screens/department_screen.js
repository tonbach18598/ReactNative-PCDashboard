import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Values from '../ultilities/values'
import { Icon, Button, Card } from 'react-native-elements'
import CustomHeader from '../components/custom_header'
import Colors from '../ultilities/colors'

export default class DepartmentScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {
                    id:1,
                    time:'10:30 17/02/2020',
                    title: 'Chào mừng lễ tình nhân',
                    content: 'Bộ môn gửi tặng 100 hộp chocolate cho các sinh viên',
                    image: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent-xsp1-1.xx&oh=fb5c1aaa14644eddff945466da8f9183&oe=5EB7A828',
                },
                {
                    id:2,
                    time:'10:30 17/02/2020',
                    title: 'Chào mừng lễ tình nhân',
                    content: 'Bộ môn gửi tặng 100 hộp chocolate cho các sinh viên',
                    image: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent-xsp1-1.xx&oh=fb5c1aaa14644eddff945466da8f9183&oe=5EB7A828',
                },
                {
                    id:3,
                    time:'10:30 17/02/2020',
                    title: 'Chào mừng lễ tình nhân',
                    content: 'Bộ môn gửi tặng 100 hộp chocolate cho các sinh viên',
                    image: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent-xsp1-1.xx&oh=fb5c1aaa14644eddff945466da8f9183&oe=5EB7A828',
                },
                {
                    id:4,
                    time:'10:30 17/02/2020',
                    title: 'Chào mừng lễ tình nhân',
                    content: 'Bộ môn gửi tặng 100 hộp chocolate cho các sinh viên',
                    image: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent-xsp1-1.xx&oh=fb5c1aaa14644eddff945466da8f9183&oe=5EB7A828',
                },
                {
                    id:5,
                    time:'10:30 17/02/2020',
                    title: 'Chào mừng lễ tình nhân',
                    content: 'Bộ môn gửi tặng 100 hộp chocolate cho các sinh viên',
                    image: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/82250698_1354624784710283_3323354228021264384_o.jpg?_nc_cat=104&_nc_ohc=7ePO0Vo6uV8AX9mNIAB&_nc_ht=scontent-xsp1-1.xx&oh=fb5c1aaa14644eddff945466da8f9183&oe=5EB7A828',
                }
            ]
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <CustomHeader left='menu' onPress={() => { this.props.navigation.openDrawer() }} />
                <FlatList 
                style={{flex:1}}
                data={this.state.posts}
                    keyExtractor={item=>item.id}
                    renderItem={({ item }) => (
                        <Card containerStyle={{elevation:5,borderRadius:10}}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{color:Colors.blue,fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                                <Text style={{color:Colors.grey,fontSize:12,marginTop:5}}>{item.time}</Text>
                                <Text style={{color:Colors.black,fontSize:14,marginTop:10,marginBottom:10}}>{item.content}</Text>
                                <Image style={{ width: '100%', height: 200,marginTop:5, borderRadius:10 }}
                                    source={{ uri: item.image }}
                                />
                            </View>
                        </Card>
                    )}
                />
            </View>
        );
    }
}

