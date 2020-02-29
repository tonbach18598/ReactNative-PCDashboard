import { READ_COMMENTS, INITIALIZATION, CREATE_COMMENT, WARNING, UPDATE_COMMENT, DELETE_COMMENT, CREATE_COMMENT_FAILURE, CREATE_COMMENT_SUCCESS, UPDATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAILURE, DELETE_COMMENT_FAILURE, DELETE_COMMENT_SUCCESS } from './type'
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

const saveComments = (comments) => {
    return {
        type: READ_COMMENTS,
        comments
    }
}

export const createComment = (postId,content) => {
    return async (dispatch) => {
        if(content!==''){
            let token = await Preferences.loadToken()
            Axios({
                method: 'POST',
                url: Configs.baseUrl + Configs.commentPath+postId,
                headers: {
                    'Authorization': token
                },
                params:{
                    'content':content
                }
            }).then(response => {
                if(response.data){
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
                    dispatch(onResponse(CREATE_COMMENT, CREATE_COMMENT_SUCCESS))
                }
                else dispatch(onResponse(CREATE_COMMENT, CREATE_COMMENT_FAILURE))
                dispatch(onResponse(CREATE_COMMENT, INITIALIZATION))
            }).catch(error => {
                console.log(error)
                dispatch(onResponse(CREATE_COMMENT, CREATE_COMMENT_FAILURE))
                dispatch(onResponse(CREATE_COMMENT, INITIALIZATION))
            })
        } else {
            dispatch(onResponse(CREATE_COMMENT, WARNING))
            dispatch(onResponse(CREATE_COMMENT, INITIALIZATION))
        }
    }
}

export const updateComment = (postId, commentId,content) => {
    return async (dispatch) => {
        if(content!==''){
            let token = await Preferences.loadToken()
            Axios({
                method: 'PUT',
                url: Configs.baseUrl + Configs.commentPath+commentId,
                headers: {
                    'Authorization': token
                },
                params:{
                    'content':content
                }
            }).then(response => {
                if(response.data){
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
                    dispatch(onResponse(UPDATE_COMMENT, UPDATE_COMMENT_SUCCESS))
                }
                else dispatch(onResponse(UPDATE_COMMENT, UPDATE_COMMENT_FAILURE))
                dispatch(onResponse(UPDATE_COMMENT, INITIALIZATION))
            }).catch(error => {
                console.log(error)
                dispatch(onResponse(UPDATE_COMMENT, UPDATE_COMMENT_FAILURE))
                dispatch(onResponse(UPDATE_COMMENT, INITIALIZATION))
            })
        } else {
            dispatch(onResponse(UPDATE_COMMENT, WARNING))
            dispatch(onResponse(UPDATE_COMMENT, INITIALIZATION))
        }
    }
}

export const deleteComment = (postId,commentId) => {
    return async (dispatch) => {
        console.log('delete cmt 1')
        let token = await Preferences.loadToken()
        Axios({
            method: 'DELETE',
            url: Configs.baseUrl + Configs.commentPath+commentId,
            headers: {
                'Authorization': token
            },
        }).then(response => {
            if(response.data){
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
                dispatch(onResponse(DELETE_COMMENT, DELETE_COMMENT_SUCCESS))
            }
            else dispatch(onResponse(DELETE_COMMENT, DELETE_COMMENT_FAILURE))
            dispatch(onResponse(DELETE_COMMENT, INITIALIZATION))
        }).catch(error => {
            console.log(error)
            dispatch(onResponse(DELETE_COMMENT, DELETE_COMMENT_FAILURE))
            dispatch(onResponse(DELETE_COMMENT, INITIALIZATION))
        })
    }
}

const onResponse = (type, status) => {
    return {
        type: type,
        status
    }
}