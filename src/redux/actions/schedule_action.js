import { READ_SCHEDULES} from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'

export const saveSchedules=()=>{
    return (dispatch)=>{
        Axios({
            method:'GET',
            url:Configs.baseUrl+Configs.schedulePath+'GV',
            headers:{
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMCIsImlhdCI6MTU4MTgzNjc4OCwiZXhwIjoxNjEzMzcyNzg4fQ.TFdkVG167teqOaZS5iWly97VXqxq2j5YCNohgwFmeP9uqudg4bPMeeNYAola2zBfDB2oZE036c4ux4-eTVGsAA'}
        }).then(response=>{
            dispatch(getSchedules(response.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

export const getSchedules=(schedules)=>{
    console.log(schedules)
    return {
        type:READ_SCHEDULES,
        schedules
    }
}