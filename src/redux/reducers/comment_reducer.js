import {READ_COMMENTS, CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT} from '../actions/type'

export const readCommentReducer=(state=[],action)=>{
    switch(action.type){
        case READ_COMMENTS:
            return [...action.comments]
        default:
            return [...state]
            
    }
}

export const writeCommentReducer=(state=null,action)=>{
    console.log('reducer '+action.type)
    console.log('reducer 2 '+action.status)
    switch(action.type){
        case CREATE_COMMENT:
            return action.status
        case UPDATE_COMMENT:
            return action.status
        case DELETE_COMMENT:
            return action.status
        default:
            return state
    }
}