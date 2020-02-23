import { READ_USERS} from './type'
import Axios from 'axios'
import Configs from '../../ultilities/configs'

export const loadUsers=(classId)=>{
    return (dispatch)=>{
        Axios({
            method:'GET',
            url:Configs.baseUrl+Configs.userPath+classId,
            headers:{
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMCIsImlhdCI6MTU4MTgzNjc4OCwiZXhwIjoxNjEzMzcyNzg4fQ.TFdkVG167teqOaZS5iWly97VXqxq2j5YCNohgwFmeP9uqudg4bPMeeNYAola2zBfDB2oZE036c4ux4-eTVGsAA'}
        }).then(response=>{
            dispatch(getUsers(response.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

export const saveUsers=(users)=>{
    return {
        type:READ_USERS,
        users
    }
}