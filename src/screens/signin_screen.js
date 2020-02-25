import React, { Component } from 'react'
import { View, Dimensions } from 'react-native';
import Values from '../ultilities/values'
import Logo from '../components/logo'
import SigninTextInput from '../components/signin_text_input'
import SigninButton from '../components/signin_button'
import ForgetPasswordButton from '../components/forget_password_button'
import Routes from '../ultilities/routes';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { getToken } from '../redux/actions/signin_action';
import Toast from 'react-native-simple-toast'
import { SUCCESS, FAILURE, WARNING } from '../redux/actions/type';

class SigninScreen extends Component {

    state={
        username:'',
        password:'',
    }

    render() {
        const {username,password}=this.state
        if(this.props.loading===SUCCESS){
            this.props.navigation.dispatch(NavigationActions.navigate({routeName:Routes.dashboardNavigator}))
        }
        return (
        <View style={{flexDirection:'column', width:Dimensions.get('window').width, height:Dimensions.get('window').height, alignItems:'center', justifyContent:'space-between'}}>
            <Logo/>
            <View>
                <SigninTextInput
                    secureText={false}
                    icon='person'
                    placeholder={Values.ACCOUNT}
                    style={{marginTop:10, marginBottom:10}}
                    value={username}
                    onChangeText={username=>this.setState({username})}
                    />
                <SigninTextInput
                    secureText={true}
                    icon='lock'
                    placeholder={Values.PASSWORD}
                    style={{marginTop:10, marginBottom:20}}
                    value={password}
                    onChangeText={password=>this.setState({password})}
                    />
                <ForgetPasswordButton
                    title={Values.FORGET_PASSWORD}
                    onPress={()=>this.props.navigation.push(Routes.forgetRoute)}/>
            </View>
            <View>
                <SigninButton title={Values.SIGN_IN.toUpperCase() } onPress={()=>{this.props.onSignin(username,password)}}/>
                <View style={{width:'100%', height:Dimensions.get('window').height/10}}/>
            </View>
        </View>)
    }
}

const mapStateToProps = (state) => {
    switch (state.signinStatus) {
        case WARNING:
            Toast.showWithGravity('Tài khoản hoặc mật khẩu không được để trống', Toast.SHORT, Toast.CENTER)
            break;
        case FAILURE:
            Toast.showWithGravity('Đăng nhập thất bại', Toast.SHORT, Toast.CENTER)
            break;
        case SUCCESS:
            Toast.showWithGravity('Đăng nhập thành công', Toast.SHORT, Toast.CENTER)
            break
    }
    return {
        loading:state.signinStatus
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onSignin: (username,password) => {
            dispatch(getToken(username,password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SigninScreen)