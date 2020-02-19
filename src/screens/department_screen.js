import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import CustomHeader from '../components/custom_header'
import Colors from '../ultilities/colors'
import Values from '../ultilities/values'
import Axios from 'axios'
import Configs from '../ultilities/configs'
import Optional from 'react-native-optional'

export default class DepartmentScreen extends Component {
    state={
        posts:[]
    }

    componentDidMount(){
        Axios({
            method:'GET',
            url:Configs.baseUrl+Configs.departmentPath,
            params:{'number':10},
            headers:{ 'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTc3MDkxNjAxLCJleHAiOjE2MDg2Mjc2MDF9.wNCingf553U0ZAo4N-_ZIKNPu9fzNtWOc3nQBhLeV-of5GUawEehZ0TUyCzrWxJMiN42qTVOObXSR5E_JE3_IA'}
        }).then(response=>{
            console.log(response.data)
            this.setState({
                posts:response.data
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <View style={{flex:1}}>
                <CustomHeader title={Values.PHYSICS_COMPUTER_SCIENCE.toUpperCase()} left='menu' onPressLeft={() => { this.props.navigation.openDrawer() }} />
                <FlatList 
                style={{flex:1}}
                keyExtractor={item=>item.id}
                ListFooterComponent={<View style={{height:5}}/>}
                data={this.state.posts}
                    renderItem={({ item }) => (
                        <Card containerStyle={{borderRadius:10,
                            ...Platform.select({
                            ios: {
                                shadowColor: Colors.grey,
                                shadowOffset: { height: 1, width: 1 },
                                shadowOpacity: 0.8,
                                shadowRadius: 5
                            },
                            android: {
                                elevation: 5
                            }
                        })}}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{color:Colors.blue,fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                                <Text style={{color:Colors.grey,fontSize:12,marginTop:5}}>{item.time}</Text>
                                <Text style={{color:Colors.black,fontSize:14,marginTop:10,marginBottom:10}}>{item.content}</Text>
                                <Optional test={item.image!==null}>
                                <Image
                                    style={{ width: '100%', height: 200,marginTop:5, borderRadius:10 }}
                                    source={{ uri: item.image }}/>
                                </Optional>
                            </View>
                        </Card>
                    )}
                />
            </View>
        );
    }
}