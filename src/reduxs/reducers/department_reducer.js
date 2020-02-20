import {READ_DEPARTMENT_POSTS} from '../actions/type'
let departmentPosts=[]

const departmentReducer=(state=departmentPosts,action)=>{
    switch (action.type){
        case READ_DEPARTMENT_POSTS:
            console.log('reducer ')
            const updateState=[...state,action.departmentPosts]
            return updateState
        default:
            return [...state]
    }
}

export default departmentReducer