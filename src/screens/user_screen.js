import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions, Linking } from 'react-native'
import CustomHeader from '../components/custom_header'
import Colors from '../ultilities/colors'
import { Card } from 'react-native-elements'
import { loadUsers } from '../redux/actions/user_action'
import { connect } from 'react-redux'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Icon } from 'react-native-elements'
import FastImage from 'react-native-fast-image'
import Toast from 'react-native-simple-toast'
import Preferences from '../ultilities/preferences'


class UserScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedUser: {
                userAvatar: '',
                userName: '',
                userId: '',
                email: '',
                phone: ''
            }
        }
    }

    showBottomSheet = (item) => {
        this.setState({ selectedUser: item })
        this.RBSheet.open()
    }

    linkEmail = async (email) => {
        let url = 'mailto:$' + email
        let selfEmail = (await Preferences.loadSelf()).email
        Linking.canOpenURL(url).then((supported) => {
            if (!supported || email === selfEmail)
                Toast.showWithGravity('Không thể gửi email', Toast.SHORT, Toast.CENTER)
            else return Linking.openURL(url)
        }).catch((error) => Toast.showWithGravity('Không thể gửi email', Toast.SHORT, Toast.CENTER))
    }

    linkPhone = async (phone) => {
        let url = 'tel:$' + phone
        let selfPhone = (await Preferences.loadSelf()).phone
        Linking.canOpenURL(url).then((supported) => {
            if (!supported || phone === selfPhone)
                Toast.showWithGravity('Không thể gọi điện', Toast.SHORT, Toast.CENTER)
            else return Linking.openURL(url)
        }).catch((error) => Toast.showWithGravity('Không thể gọi điện', Toast.SHORT, Toast.CENTER))
    }

    componentDidMount() {
        this.props.fetchData(this.props.navigation.state.params.classId)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={this.props.navigation.state.params.title.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <FlatList
                    style={{ flex: 1, paddingBottom: 50 }}
                    data={this.props.users}
                    keyExtractor={item => item.userId}
                    ListFooterComponent={<View style={{ height: 5 }} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.showBottomSheet(item) }}>
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
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FastImage
                                        style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').width / 6, borderRadius: Dimensions.get('window').width / 12 }}
                                        source={{ uri: item.avatar }} />
                                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, color: Colors.blue, fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text style={{ fontSize: 14, color: Colors.deepOrangeAccent, fontWeight: 'bold', marginTop: 5 }}>{item.userId}</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    )} />
                <RBSheet
                    ref={ref => { this.RBSheet = ref }}
                    height={Dimensions.get('window').height / 2}
                    duration={250}
                    customStyles={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <View style={{ height: '100%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <FastImage
                            style={{ width: Dimensions.get('window').height / 4, height: Dimensions.get('window').height / 4, borderRadius: Dimensions.get('window').height / 8 }}
                            source={{ uri: this.state.selectedUser.avatar }} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.blue, paddingTop: 10, paddingBottom: 10 }}>{this.state.selectedUser.name}</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.deepOrangeAccent }}>{this.state.selectedUser.userId}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <TouchableOpacity onPress={() => { this.linkEmail(this.state.selectedUser.email) }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name='email' color={Colors.lightBlue} />
                                        <Text style={{ fontSize: 16, paddingLeft: 10 }}>{this.state.selectedUser.email}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 10 }} />
                                <TouchableOpacity onPress={() => { this.linkPhone(this.state.selectedUser.phone) }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name='smartphone' color={Colors.lightBlue} />
                                        <Text style={{ fontSize: 16, paddingLeft: 10 }}>{this.state.selectedUser.phone}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </RBSheet>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (classId) => {
            dispatch(loadUsers(classId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)