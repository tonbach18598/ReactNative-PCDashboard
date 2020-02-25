import { READ_CLASS_POSTS } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const loadClassPosts = (number, classId) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        Axios({
            method: 'GET',
            url: Configs.baseUrl + Configs.classPath + classId,
            params: { 'number': number },
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(saveClassPosts(response.data))
        }).catch(error => {
            console.log(error)
        })
    }
}

export const saveClassPosts = (classPosts) => {
    return {
        type: READ_CLASS_POSTS,
        classPosts
    }
}