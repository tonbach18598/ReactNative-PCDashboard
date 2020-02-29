import { UPDATE_INFORMATION, SUCCESS, FAILURE, WARNING, INITIALIZATION } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'
import {saveSelf} from '../actions/self_action'

export const updateInformation = (email, phone) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        let userId = (await Preferences.loadSelf()).userId
        if (email !== '' && phone !== '') {
            Axios({
                method: 'PUT',
                url: Configs.baseUrl + Configs.userPath,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                data: {
                    'userId': userId,
                    'email': email,
                    'phone': phone
                }
            }).then(response => {
                if (response.data){
                    Axios({
                        method: 'GET',
                        url: Configs.baseUrl + Configs.userPath,
                        headers: {
                            'Authorization': token
                        }
                    }).then(async response => {
                        await Preferences.saveSelf(response.data)
                        let self = await Preferences.loadSelf()
                        dispatch(saveSelf(self))
                        dispatch(onResponse(SUCCESS))
                        dispatch(onResponse(INITIALIZATION))
                    }).catch(error => {
                        dispatch(onResponse(FAILURE))
                        console.log(error)
                        dispatch(onResponse(INITIALIZATION))
                    })
                }
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
        type: UPDATE_INFORMATION,
        status
    }
}