import { SIGN_IN, SUCCESS, FAILURE, WARNING, INITIALIZATION } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const getToken = (username, password) => {
    return (dispatch) => {
        if (username !== '' && password !== '') {
            Axios({
                method: 'POST',
                url: Configs.baseUrl + Configs.tokenPath,
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    'account': 'TEACHER'
                },
                data: {
                    'userId': username,
                    'password': password
                }
            }).then(async response => {
                let token = response.data.tokenType + ' ' + response.data.accessToken
                await Preferences.saveToken(token)
                Axios({
                    method: 'GET',
                    url: Configs.baseUrl + Configs.userPath,
                    headers: {
                        'Authorization': token
                    }
                }).then(async response => {
                    await Preferences.saveSelf(response.data)
                    dispatch(onResponse(SUCCESS))
                    dispatch(onResponse(INITIALIZATION))
                }).catch(error => {
                    dispatch(onResponse(FAILURE))
                    console.log(error)
                    dispatch(onResponse(INITIALIZATION))
                })
            }).catch(error => {
                dispatch(onResponse(FAILURE))
                console.log(error)
                dispatch(onResponse(INITIALIZATION))
            })
        } else dispatch(onResponse(WARNING))
        dispatch(onResponse(INITIALIZATION))
    }
}

const onResponse = (status) => {
    return {
        type: SIGN_IN,
        status
    }
}