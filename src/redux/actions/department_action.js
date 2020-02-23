import {READ_DEPARTMENT_POSTS} from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'

export const loadDepartmentPosts=(number)=>{
    return (dispatch)=>{
        Axios({
            method:'GET',
            url:Configs.baseUrl+Configs.departmentPath,
            params:{'number':number},
            headers:{ 
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTc3MDkxNjAxLCJleHAiOjE2MDg2Mjc2MDF9.wNCingf553U0ZAo4N-_ZIKNPu9fzNtWOc3nQBhLeV-of5GUawEehZ0TUyCzrWxJMiN42qTVOObXSR5E_JE3_IA'}
        }).then(response=>{
            dispatch(saveDepartmentPosts(response.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

export const saveDepartmentPosts=(deparmentPosts)=>{
    return {
        type:READ_DEPARTMENT_POSTS,
        deparmentPosts
    }
}