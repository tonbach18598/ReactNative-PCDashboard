import { FORGET, SUCCESS, FAILURE, WARNING } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'

export const forgetPassword = (username) => {
    return (dispatch) => {
        if (username !== '') {
            Axios({
                method: 'PUT',
                url: Configs.baseUrl + Configs.forgetPath + username,
            }).then(response => {
                dispatch(onResponse(SUCCESS))
            }).catch(error => {
                dispatch(onResponse(FAILURE))
                console.log(error)
            })
        } else dispatch(onResponse(WARNING))
    }
}

export const onResponse = (status) => {
    return {
        type: FORGET,
        status
    }
}