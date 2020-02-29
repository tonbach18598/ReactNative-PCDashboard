import { FORGET, SUCCESS, FAILURE, WARNING, INITIALIZATION } from './type'
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
                dispatch(onResponse(INITIALIZATION))
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
        type: FORGET,
        status
    }
}