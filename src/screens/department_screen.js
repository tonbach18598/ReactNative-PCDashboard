import React, { Component } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Card } from 'react-native-elements'
import CustomHeader from '../components/custom_header'
import Colors from '../ultilities/colors'
import Values from '../ultilities/values'
import Optional from 'react-native-optional'
import { loadDepartmentPosts } from '../redux/actions/department_action'
import { connect } from 'react-redux'

class DepartmentScreen extends Component {

    componentDidMount() {
        this.props.fetchData(10)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.PHYSICS_COMPUTER_SCIENCE.toUpperCase()} left='menu' onPressLeft={() => { this.props.navigation.openDrawer() }} />
                <FlatList
                    style={{ flex: 1 }}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={{ height: 5 }} />}
                    data={this.props.posts}
                    renderItem={({ item }) => (
                        <Card containerStyle={{
                            borderRadius: 10,
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
                            })
                        }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: Colors.blue, fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: Colors.grey, fontSize: 12, marginTop: 5 }}>{item.time}</Text>
                                <Text style={{ color: Colors.black, fontSize: 14, marginTop: 10, marginBottom: 10 }}>{item.content}</Text>
                                <Optional test={item.image !== null}>
                                    <FastImage
                                        style={{ width: '100%', height: 200, marginTop: 5, borderRadius: 10 }}
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

const mapStateToProps = (state) => {
    return {
        posts: state.departmentPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (number) => {
            dispatch(loadDepartmentPosts(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentScreen)