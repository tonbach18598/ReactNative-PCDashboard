import {READ_DEPARTMENT_POSTS} from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'

export const saveDepartmentPosts=(number)=>{
    return (dispatch)=>{
        Axios({
            method:'GET',
            url:Configs.baseUrl+Configs.departmentPath,
            params:{'number':number},
            headers:{ 
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTc3MDkxNjAxLCJleHAiOjE2MDg2Mjc2MDF9.wNCingf553U0ZAo4N-_ZIKNPu9fzNtWOc3nQBhLeV-of5GUawEehZ0TUyCzrWxJMiN42qTVOObXSR5E_JE3_IA'}
        }).then(response=>{
            console.log('DebugRespon', response.data)
            console.log(response.data)
            dispatch(getDepartmentPosts(response.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

export const getDepartmentPosts=(deparmentPosts)=>{
    console.log('DebugAction', deparmentPosts)
    console.log(deparmentPosts)
    return {
        type:READ_DEPARTMENT_POSTS,
        deparmentPosts
    }
}