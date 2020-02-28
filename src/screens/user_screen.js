import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'
import Colors from '../ultilities/colors'
import { Card, Avatar } from 'react-native-elements'
import { loadUsers } from '../redux/actions/user_action'
import { connect } from 'react-redux'

class UserScreen extends Component {

    componentDidMount(){
        this.props.fetchData(this.props.navigation.state.params.classId)
    }
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={this.props.navigation.state.params.title.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <FlatList
                    style={{ flex: 1, paddingBottom: 50 }}
                    data={this.props.users}
                    keyExtractor={item=>item.userId}
                    ListFooterComponent={<View style={{ height: 5 }} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Card containerStyle={{ borderRadius: 10,
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
                        }) }}>
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

const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchData:(classId)=>{
            dispatch(loadUsers(classId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserScreen)