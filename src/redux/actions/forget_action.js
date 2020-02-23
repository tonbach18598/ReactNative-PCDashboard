import {  FORGET } from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'

export const forgetPassword=(username)=>{
    return (dispatch)=>{
        if(username!==''){
            Axios({
                method:'PUT',
                url:Configs.baseUrl+Configs.forgetPath+username,
            }).then(response=>{
                dispatch(onResponse(1))
            }).catch(error=>{
                dispatch(onResponse(0))
                console.log(error)
            })
        } else dispatch(onResponse(-1))
    }
}

export const onResponse=(status)=>{
    return {
        type:FORGET,
        status
    }
}