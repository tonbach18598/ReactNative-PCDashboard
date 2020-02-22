import {READ_DEPARTMENT_POSTS} from '../actions/type'

const departmentReducer=(state=[],action)=>{
    switch (action.type){
        case READ_DEPARTMENT_POSTS:
            return [...action.deparmentPosts]
        default:
            return [...state] 
    }
}

export default departmentReducer