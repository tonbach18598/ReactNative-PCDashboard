import {READ_USERS} from '../actions/type'

const userReducer=(state=[],action)=>{
    switch(action.type){
        case READ_USERS:
            return [...action.users]
        default:
            return [...state]
            
    }
}

export default userReducer