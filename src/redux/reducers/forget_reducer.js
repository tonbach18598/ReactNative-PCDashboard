import { FORGET} from '../actions/type'

const forgetReducer=(state=null,action)=>{
    console.log('state toast'+state)
    switch(action.type){
        case FORGET:
            return action.status
        default:
            return state
            
    }
}

export default forgetReducer