import { SIGN_IN} from '../actions/type'

const signinReducer=(state=null,action)=>{
    switch(action.type){
        case SIGN_IN:
            return action.status
        default:
            return state
            
    }
}

export default signinReducer