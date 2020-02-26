import { CHANGE_PASSWORD } from '../actions/type'

const changeReducer=(state=null,action)=>{
    switch(action.type){
        case CHANGE_PASSWORD:
            return action.status
        default:
            return state
            
    }
}

export default changeReducer