import React, { Component } from 'react'
import { View, Dimensions } from 'react-native';
import Values from '../ultilities/values'
import Logo from '../components/logo'
import SigninTextInput from '../components/signin_text_input'
import SigninButton from '../components/signin_button'
import ForgetPasswordButton from '../components/forget_password_button'
import { connect } from 'react-redux';
import { forgetPassword, initialize } from '../redux/actions/forget_action';
import Toast from 'react-native-simple-toast';
import { WARNING, FAILURE, SUCCESS,INITIALIZATION } from '../redux/actions/type';

class ForgetScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            username:''
        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center', justifyContent: 'space-between' }}>
                <Logo />
                <View>
                    <SigninTextInput
                        icon='person'
                        placeholder={Values.ACCOUNT}
                        style={{ marginTop: 10, marginBottom: 20 }}
                        secureText={false}
                        value={this.state.username}
                        onChangeText={username => this.setState({ username })}
                    />
                    <ForgetPasswordButton
                        title={Values.BACK}
                        onPress={() => this.props.navigation.goBack()} />
                </View>
                <View>
                    <SigninButton title={Values.GET_PASSWORD.toUpperCase()} onPress={() => { this.props.getPassword(this.state.username) }} />
                    <View style={{ width: '100%', height: Dimensions.get('window').height / 10 }} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    switch (state.forgetStatus) {
        case INITIALIZATION:
            break
        case WARNING:
            Toast.showWithGravity('Tài khoản không được để trống', Toast.SHORT, Toast.CENTER)
            break
        case FAILURE:
            Toast.showWithGravity('Lấy mật khẩu thất bại', Toast.SHORT, Toast.CENTER)
            break;
        case SUCCESS:
            Toast.showWithGravity('Lấy mật khẩu thành công. Vui lòng kiểm tra trong email', Toast.SHORT, Toast.CENTER)
            break
    }
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPassword: (username) => {
            dispatch(forgetPassword(username))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetScreen)