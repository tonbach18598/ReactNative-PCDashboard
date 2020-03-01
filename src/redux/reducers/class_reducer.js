import {READ_CLASS_POSTS, WRITE_CLASS_POST} from '../actions/type'

export const readClassReducer=(state=[],action)=>{
    switch(action.type){
        case READ_CLASS_POSTS:
            return [...action.classPosts]
        default:
            return [...state]
            
    }
}

export const writeClassReducer=(state=null,action)=>{
    switch(action.type){
        case WRITE_CLASS_POST:
            return action.status
        default:
            return state
    }
}