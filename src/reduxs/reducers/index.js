import {combineReducers} from 'redux'
import counterReducer from '../reducers/counter_reducer'

export default combineReducers({
    counter:counterReducer
})