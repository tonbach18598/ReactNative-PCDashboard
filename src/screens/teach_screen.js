import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import CustomHeader from '../components/custom_header'
import { Card, Icon } from 'react-native-elements'
import Colors from '../ultilities/colors'
import Values from '../ultilities/values'
import { connect } from 'react-redux'
import { loadSchedules } from '../redux/actions/schedule_action'

class TeachScreen extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.PHYSICS_COMPUTER_SCIENCE.toUpperCase()} left='menu' onPressLeft={() => { this.props.navigation.openDrawer() }} />
                <FlatList
                    style={{ flex: 1 }}
                    ListFooterComponent={<View style={{ height: 5 }} />}
                    data={this.props.schedules}
                    renderItem={({ item }) => (
                        <Card containerStyle={{
                            borderRadius: 10, ...Platform.select({
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
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ color: Colors.blue, fontSize: 18, fontWeight: 'bold' }}>{item.day.toUpperCase()}</Text>
                                <FlatList
                                    style={{ flex: 1, width: '100%' }}
                                    data={item.subjects}
                                    renderItem={({ item }) => (
                                        <Card containerStyle={{
                                            borderRadius: 10, ...Platform.select({
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
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                                    <Icon name='book' color={Colors.lightBlue} />
                                                    <Text style={{ color: Colors.black, fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>{item.subject}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                                    <Icon name='timer' color={Colors.lightBlue} />
                                                    <Text style={{ color: Colors.black, fontSize: 14, marginLeft: 10 }}>{item.time}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Icon name='people' color={Colors.lightBlue} />
                                                    <Text style={{ color: Colors.black, fontSize: 14, marginLeft: 10 }}>{item.teacherOrClass}</Text>
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

const mapStateToProps = (state) => {
    return {
        schedules: state.schedules,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(loadSchedules())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachScreen)