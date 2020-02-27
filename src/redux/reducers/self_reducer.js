import { READ_SELF } from '../actions/type'

const selfReducer=(state={'avatar':'','name':'','userId':''}, action)=>{
    switch(action.type){
        case READ_SELF:
            return action.self
        default:
            return state
            
    }
}

export default selfReducer