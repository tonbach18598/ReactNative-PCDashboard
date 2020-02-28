import { UPDATE_INFORMATION } from '../actions/type'

const updateReducer=(state=null,action)=>{
    switch(action.type){
        case UPDATE_INFORMATION:
            return action.status
        default:
            return state
            
    }
}

export default updateReducer