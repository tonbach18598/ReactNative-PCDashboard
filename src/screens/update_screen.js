import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'
import { Avatar } from 'react-native-elements'
import UpdateInformationTextInput from '../components/update_information_text_input'
import Colors from '../ultilities/colors'
import SigninButton from '../components/signin_button'
import { NOT_VALIDATED, WARNING, SUCCESS, FAILURE, INITIALIZATION } from '../redux/actions/type'
import Toast from 'react-native-simple-toast'
import { updateInformation } from '../redux/actions/update_actions'
import { connect } from 'react-redux'
import { loadSelf } from '../redux/actions/self_action'
import Optional from 'react-native-optional'
import FastImage from 'react-native-fast-image'

class UpdateScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: this.props.self.email,
            phone: this.props.self.phone
        }
    }
    
    componentDidMount() {
        this.props.initSelf()
    }

    render() {        
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <CustomHeader title={Values.UPDATE_INFORMATION.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', height: Dimensions.get('window').height / 4, justifyContent: 'center' }}>
                        <Optional test={this.props.self.avatar !== null}>
                            <FastImage
                                style={{ width: Dimensions.get('window').width/3, height: Dimensions.get('window').width/3, borderRadius: Dimensions.get('window').width/6 }}
                                source={{ uri: this.props.self.avatar }} />
                        </Optional>
                        <Optional test={this.props.self.name !== null}>
                            <Text style={{ fontSize: 24, color: Colors.blue, fontWeight: 'bold', paddingTop: 20, paddingBottom: 5 }}>{this.props.self.name}</Text>
                        </Optional>
                        <Optional test={this.props.self.userId !== null}>
                            <Text style={{ fontSize: 20, color: Colors.deepOrangeAccent, fontWeight: 'bold' }}>{this.props.self.userId}</Text>
                        </Optional>
                    </View>
                    <View>
                        <UpdateInformationTextInput
                            secureText={false}
                            placeholder={Values.CLASS}
                            icon='people'
                            editable={false}
                            color={Colors.lightBlue}
                            value={this.props.self.classId} />
                        <UpdateInformationTextInput
                            secureText={false}
                            placeholder={Values.EMAIL}
                            icon='mail'
                            editable={true}
                            color={Colors.orange}
                            style={{ marginTop: 10, marginBottom: 10 }}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })} />
                        <UpdateInformationTextInput
                            secureText={false}
                            placeholder={Values.PHONE}
                            icon='smartphone'
                            editable={true}
                            color={Colors.orange}
                            value={this.state.phone}
                            onChangeText={phone => this.setState({ phone })} />
                        <View style={{ height: Dimensions.get('window').height / 10 }} />
                        <SigninButton title={Values.CONFIRM.toUpperCase()} onPress={() => {this.props.onConfirm(this.state.email, this.state.phone)}} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    switch (state.updateStatus) {
        case INITIALIZATION:
            break
        case NOT_VALIDATED:
            Toast.showWithGravity('Email hoặc số điện thoại không hợp lệ', Toast.SHORT, Toast.CENTER)
            break
        case WARNING:
            Toast.showWithGravity('Email hoặc số điện thoại không được để trống', Toast.SHORT, Toast.CENTER)
            break
        case FAILURE:
            Toast.showWithGravity('Cập nhật thông tin thất bại', Toast.SHORT, Toast.CENTER)
            break
        case SUCCESS:
            Toast.showWithGravity('Cập nhật thông tin thành công', Toast.SHORT, Toast.CENTER)
            break
    }
    return {
        self: state.self
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initSelf: () => {
            dispatch(loadSelf())
        },
        onConfirm: (email, phone) => {
            dispatch(updateInformation(email, phone))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateScreen)