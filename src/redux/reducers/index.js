import {combineReducers} from 'redux'
import departmentReducer from './department_reducer'
import {readClassReducer, writeClassReducer} from './class_reducer'
import scheduleReducer from './schedule_reducer'
import userReducer from './user_reducer'
import forgetReducer from './forget_reducer'
import signinReducer from './signin_reducer'
import selfReducer from './self_reducer'
import changeReducer from './change_reducer'
import updateReducer from './update_reducer'
import {readCommentReducer, writeCommentReducer} from './comment_reducer'

const rootReducer=combineReducers(
    {
        departmentPosts:departmentReducer,
        classPosts:readClassReducer,
        classStatus:writeClassReducer,
        comments:readCommentReducer,
        commentStatus:writeCommentReducer,
        schedules:scheduleReducer,
        users:userReducer,
        self:selfReducer,
        signinStatus:signinReducer,
        forgetStatus:forgetReducer,
        updateStatus:updateReducer,
        changeStatus:changeReducer
    }
)

export default rootReducer