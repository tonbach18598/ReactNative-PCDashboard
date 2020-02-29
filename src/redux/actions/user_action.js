import { READ_USERS } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const loadUsers = (classId) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        Axios({
            method: 'GET',
            url: Configs.baseUrl + Configs.userPath + classId,
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(saveUsers(response.data))
        }).catch(error => {
            console.log(error)
        })
    }
}

const saveUsers = (users) => {
    return {
        type: READ_USERS,
        users
    }
}