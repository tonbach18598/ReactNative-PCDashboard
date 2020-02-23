import {READ_SCHEDULES} from '../actions/type'

const scheduleReducer=(state=[],action)=>{
    switch(action.type){
        case READ_SCHEDULES:
            return [...action.schedules]
        default:
            return [...state]
            
    }
}

export default scheduleReducer