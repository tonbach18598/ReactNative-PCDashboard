import React, { Component } from 'react'
import { View, Dimensions, ScrollView, Image } from 'react-native'
import CustomHeader from '../components/custom_header'
import Values from '../ultilities/values'
import UpdateInformationTextInput from '../components/update_information_text_input'
import Colors from '../ultilities/colors'
import SigninButton from '../components/signin_button'
import { connect } from 'react-redux'
import { changePassword } from '../redux/actions/change_action'
import { NOT_VALIDATED, NOT_MATCHED, WARNING, SUCCESS, FAILURE, INITIALIZATION } from '../redux/actions/type'
import Routes from '../ultilities/routes'
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast'


class ChangeScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            oldPassword: '',
            newPassword: '',
            retypePassword: ''
        }
    }

    render() {
        if (this.props.response === SUCCESS) 
            this.props.navigation.dispatch(NavigationActions.navigate({ routeName: Routes.signinNavigator }))

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <CustomHeader title={Values.CHANGE_PASSWORD.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Image style={{ width: Dimensions.get('window').width * 0.6, height: Dimensions.get('window').width * 0.4 }} source={require('../../assets/logo.png')} />

                    <View>
                        <UpdateInformationTextInput
                            secureText={true}
                            placeholder={Values.OLD_PASSWORD}
                            icon='vpn-key' editable={true}
                            color={Colors.lightBlue}
                            value={this.state.oldPassword}
                            onChangeText={oldPassword => this.setState({ oldPassword })} />
                        <UpdateInformationTextInput
                            secureText={true}
                            placeholder={Values.NEW_PASSWORD}
                            icon='lock-open'
                            editable={true}
                            color={Colors.orange}
                            style={{ marginTop: 10, marginBottom: 10 }}
                            value={this.state.newPassword}
                            onChangeText={newPassword => this.setState({ newPassword })} />
                        <UpdateInformationTextInput
                            secureText={true}
                            placeholder={Values.RETYPE_PASSWORD}
                            icon='lock-outline'
                            editable={true}
                            color={Colors.orange}
                            value={this.state.retypePassword}
                            onChangeText={retypePassword => this.setState({ retypePassword })} />
                        <View style={{ height: Dimensions.get('window').height / 10 }} />
                        <SigninButton
                            title={Values.CONFIRM.toUpperCase()}
                            onPress={() => {this.props.onConfirm(this.state.oldPassword, this.state.newPassword, this.state.retypePassword)}} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    switch (state.changeStatus) {
        case INITIALIZATION:
            break
        case NOT_VALIDATED:
            Toast.showWithGravity('Mật khẩu không hợp lệ', Toast.SHORT, Toast.CENTER)
            break
        case NOT_MATCHED:
            Toast.showWithGravity('Mật khẩu mới nhập lại không khớp', Toast.SHORT, Toast.CENTER)
            break
        case WARNING:
            Toast.showWithGravity('Mật khẩu cũ hoặc mới không được để trống', Toast.SHORT, Toast.CENTER)
            break
        case FAILURE:
            Toast.showWithGravity('Thay đổi mật khẩu thất bại', Toast.SHORT, Toast.CENTER)
            break
        case SUCCESS:
            Toast.showWithGravity('Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại', Toast.SHORT, Toast.CENTER)
            break
    }
    return {
        response: state.changeStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onConfirm: (oldPassword, newPassword, retypePassword) => {
            dispatch(changePassword(oldPassword, newPassword, retypePassword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeScreen)