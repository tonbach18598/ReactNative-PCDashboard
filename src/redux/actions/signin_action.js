import { SIGN_IN, SUCCESS, FAILURE, WARNING } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const getToken = (username, password) => {
    return (dispatch) => {
        if (username !== '' && password !== '') {
            Axios({
                method: 'POST',
                url: Configs.baseUrl + Configs.tokenPath,
                params: {
                    'account': 'TEACHER'
                },
                data: {
                    'userId': username,
                    'password': password
                },
                headers: {
                    'Content-Type': 'application/json'
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
                    console.log(response.data)
                    dispatch(onResponse(SUCCESS))
                }).catch(error => {
                    dispatch(onResponse(FAILURE))
                    console.log(error)
                })
            }).catch(error => {
                dispatch(onResponse(FAILURE))
                console.log(error)
            })
        } else dispatch(onResponse(WARNING))
    }
}

export const onResponse = (status) => {
    return {
        type: SIGN_IN,
        status
    }
}