import {combineReducers} from 'redux'
import departmentReducer from './department_reducer'
import classReducer from './class_reducer'
import scheduleReducer from './schedule_reducer'
import userReducer from './user_reducer'

const rootReducer=combineReducers(
    {
        departmentPosts:departmentReducer,
        classPosts:classReducer,
        schedules:scheduleReducer,
        users:userReducer
    }
)

export default rootReducer