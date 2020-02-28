import { READ_COMMENTS } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const loadComments = (postId) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        Axios({
            method: 'GET',
            url: Configs.baseUrl + Configs.commentPath+postId,
            headers: {
                'Authorization': token
            },
        }).then(response => {
            dispatch(saveComments(response.data))
        }).catch(error => {
            console.log(error)
        })
    }
}

export const saveComments = (comments) => {
    return {
        type: READ_COMMENTS,
        comments
    }
}