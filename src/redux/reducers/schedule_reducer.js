import {READ_SCHEDULES} from '../actions/type'

const scheduleReducer=(state=[],action)=>{
    switch(action.type){
        case READ_SCHEDULES:
            console.log('schedule',action.schedules)
            return [...action.schedules]
        default:
            return [...state]
            
    }
}

export default scheduleReducer