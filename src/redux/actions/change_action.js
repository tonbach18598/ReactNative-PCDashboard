import { CHANGE_PASSWORD, SUCCESS, FAILURE, WARNING, INITIALIZATION } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const changePassword = (oldPassword, newPassword, retypePassword) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        let userId = (await Preferences.loadSelf()).userId
        if (oldPassword !== '' && newPassword !== '' && retypePassword !== '') {
            Axios({
                method: 'PUT',
                url: Configs.baseUrl + Configs.changePath,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                data: {
                    'userId': userId,
                    'oldPassword': oldPassword,
                    'newPassword': newPassword
                }
            }).then(response => {
                if (response.data) dispatch(onResponse(SUCCESS))
                else dispatch(onResponse(FAILURE))
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
        type: CHANGE_PASSWORD,
        status
    }
}