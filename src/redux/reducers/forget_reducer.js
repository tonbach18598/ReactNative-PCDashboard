import { FORGET } from '../actions/type'

const forgetReducer=(state=null,action)=>{
    switch(action.type){
        case FORGET:
            return action.status
        default:
            return state
            
    }
}

export default forgetReducer