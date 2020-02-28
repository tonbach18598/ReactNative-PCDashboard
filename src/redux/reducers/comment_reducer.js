import {READ_COMMENTS} from '../actions/type'

const commentReducer=(state=[],action)=>{
    switch(action.type){
        case READ_COMMENTS:
            return [...action.comments]
        default:
            return [...state]
            
    }
}

export default commentReducer