import {combineReducers} from 'redux'
import departmentReducer from './department_reducer'
import classReducer from './class_reducer'
import scheduleReducer from './schedule_reducer'
import userReducer from './user_reducer'
import forgetReducer from './forget_reducer'
import signinReducer from './signin_reducer'
import selfReducer from './self_reducer'
import changeReducer from './change_reducer'

const rootReducer=combineReducers(
    {
        departmentPosts:departmentReducer,
        classPosts:classReducer,
        schedules:scheduleReducer,
        users:userReducer,
        self:selfReducer,
        signinStatus:signinReducer,
        forgetStatus:forgetReducer,
        changeStatus:changeReducer
    }
)

export default rootReducer