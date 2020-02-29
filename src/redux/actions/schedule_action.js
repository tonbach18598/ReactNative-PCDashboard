import { READ_SCHEDULES } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const loadSchedules = () => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        Axios({
            method: 'GET',
            url: Configs.baseUrl + Configs.schedulePath + 'GV',
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(saveSchedules(response.data))
        }).catch(error => {
            console.log(error)
        })
    }
}

const saveSchedules = (schedules) => {
    return {
        type: READ_SCHEDULES,
        schedules
    }
}