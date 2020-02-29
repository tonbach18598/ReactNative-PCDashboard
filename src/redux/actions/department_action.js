import { READ_DEPARTMENT_POSTS } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const loadDepartmentPosts = (number) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        Axios({
            method: 'GET',
            url: Configs.baseUrl + Configs.departmentPath,
            headers: {
                'Authorization': token
            },
            params: { 'number': number }
        }).then(response => {
            dispatch(saveDepartmentPosts(response.data))
        }).catch(error => {
            console.log(error)
        })
    }
}

const saveDepartmentPosts = (deparmentPosts) => {
    return {
        type: READ_DEPARTMENT_POSTS,
        deparmentPosts
    }
}