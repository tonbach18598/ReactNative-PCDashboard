import { WARNING, INITIALIZATION, READ_CLASS_POSTS, WRITE_CLASS_POST, CREATE_CLASS_SUCCESS, CREATE_CLASS_FAILURE, UPDATE_CLASS_SUCCESS, UPDATE_CLASS_FAILURE, DELETE_CLASS_SUCCESS, DELETE_CLASS_FAILURE } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'
import Preferences from '../../ultilities/preferences'

export const loadClassPosts = (number, classId) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        Axios({
            method: 'GET',
            url: Configs.baseUrl + Configs.classPath + classId,
            headers: {
                'Authorization': token
            },
            params: { 'number': number }
        }).then(response => {
            dispatch(saveClassPosts(response.data))
        }).catch(error => {
            console.log(error)
        })
    }
}

const saveClassPosts = (classPosts) => {
    return {
        type: READ_CLASS_POSTS,
        classPosts
    }
}

export const createPost = (classId, content, image) => {
    return async (dispatch) => {
        const formData=new FormData()
        formData.append('classId', classId)
        formData.append('content', content)
        if(image!==null)
            formData.append('file', {uri: image.uri, type:'image/jpg', name: 'image'})
        if (content !== '') {
            let token = await Preferences.loadToken()
            Axios({
                method: 'POST',
                url: Configs.baseUrl + Configs.classPath,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            }).then(response => {
                if (response.data) {
                    Axios({
                        method: 'GET',
                        url: Configs.baseUrl + Configs.classPath + classId,
                        headers: {
                            'Authorization': token,
                            'Content-Type':'application/json'
                        },
                        params: { 'number': 10 }
                    }).then(response => {
                        dispatch(saveClassPosts(response.data))
                    }).catch(error => {
                        console.log(error)
                    })
                    dispatch(onResponse(CREATE_CLASS_SUCCESS))
                }
                else dispatch(onResponse(CREATE_CLASS_FAILURE))
                dispatch(onResponse(INITIALIZATION))
            }).catch(error => {
                console.log(error)
                dispatch(onResponse(CREATE_CLASS_FAILURE))
                dispatch(onResponse(INITIALIZATION))
            })
        } else {
            dispatch(onResponse(WARNING))
            dispatch(onResponse(INITIALIZATION))
        }
    }
}

export const updatePost = (classId, postId, content) => {
    return async (dispatch) => {
        if (content !== '') {
            let token = await Preferences.loadToken()
            Axios({
                method: 'PUT',
                url: Configs.baseUrl + Configs.classPath + postId,
                headers: {
                    'Authorization': token
                },
                params: {
                    'content': content
                }
            }).then(response => {
                if (response.data) {
                    Axios({
                        method: 'GET',
                        url: Configs.baseUrl + Configs.classPath + classId,
                        headers: {
                            'Authorization': token
                        },
                        params: { 'number': 10 }
                    }).then(response => {
                        dispatch(saveClassPosts(response.data))
                    }).catch(error => {
                        console.log(error)
                    })
                    dispatch(onResponse(UPDATE_CLASS_SUCCESS))
                }
                else dispatch(onResponse(UPDATE_CLASS_FAILURE))
                dispatch(onResponse(INITIALIZATION))
            }).catch(error => {
                console.log(error)
                dispatch(onResponse(UPDATE_CLASS_FAILURE))
                dispatch(onResponse(INITIALIZATION))
            })
        } else {
            dispatch(onResponse(WARNING))
            dispatch(onResponse(INITIALIZATION))
        }
    }
}

export const deletePost = (classId, postId) => {
    return async (dispatch) => {
        let token = await Preferences.loadToken()
        Axios({
            method: 'DELETE',
            url: Configs.baseUrl + Configs.classPath + postId,
            headers: {
                'Authorization': token
            },
        }).then(response => {
            if (response.data) {
                Axios({
                    method: 'GET',
                    url: Configs.baseUrl + Configs.classPath + classId,
                    headers: {
                        'Authorization': token
                    },
                    params: { 'number': 10 }
                }).then(response => {
                    dispatch(saveClassPosts(response.data))
                }).catch(error => {
                    console.log(error)
                })
                dispatch(onResponse(DELETE_CLASS_SUCCESS))
            }
            else dispatch(onResponse(DELETE_CLASS_FAILURE))
            dispatch(onResponse(INITIALIZATION))
        }).catch(error => {
            console.log(error)
            dispatch(onResponse(DELETE_CLASS_FAILURE))
            dispatch(onResponse(INITIALIZATION))
        })
    }
}

const onResponse = (status) => {
    return {
        type: WRITE_CLASS_POST,
        status
    }
}