import { CHANGE_PASSWORD, SUCCESS, FAILURE, WARNING } from './type'
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
                if (response.data)
                    dispatch(onResponse(SUCCESS))
                else
                    dispatch(onResponse(FAILURE))
            }).catch(error => {
                dispatch(onResponse(FAILURE))
                console.log(error)
            })
        } else dispatch(onResponse(WARNING))
    }
}

export const onResponse = (status) => {
    return {
        type: CHANGE_PASSWORD,
        status
    }
}