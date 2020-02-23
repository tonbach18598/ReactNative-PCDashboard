import { SIGN_IN } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'

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
            }).then(response => {
                console.log(response.data)
                dispatch(onResponse(1))
            }).catch(error => {
                dispatch(onResponse(0))
                console.log(error)
            })
        } else dispatch(onResponse(-1))
    }
}

export const onResponse = (status) => {
    return {
        type: SIGN_IN,
        status
    }
}