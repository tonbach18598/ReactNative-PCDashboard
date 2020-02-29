import {READ_COMMENTS, WRITE_COMMENT} from '../actions/type'

export const readCommentReducer=(state=[],action)=>{
    switch(action.type){
        case READ_COMMENTS:
            return [...action.comments]
        default:
            return [...state]
            
    }
}

export const writeCommentReducer=(state=null,action)=>{
    switch(action.type){
        case WRITE_COMMENT:
            return action.status
        default:
            return state
    }
}