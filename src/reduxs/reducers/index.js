import {combineReducers} from 'redux'
import departmentReducer from './department_reducer'

const rootReducer=combineReducers(
    {
        departmentPosts:departmentReducer
    }
)

export default rootReducer