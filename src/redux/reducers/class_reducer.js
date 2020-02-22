import {READ_CLASS_POSTS} from '../actions/type'

const classReducer=(state=[],action)=>{
    switch(action.type){
        case READ_CLASS_POSTS:
            return [...action.classPosts]
        default:
            return [...state]
            
    }
}

export default classReducer