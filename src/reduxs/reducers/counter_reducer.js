import {INCREASE, DECREASE} from '../actions/type'

const initState=0

export default function (state=initState, action){
    switch(action.type){
        case INCREASE:
            return state+1
        case DECREASE:
            return state-1
        default:
            return state
    }
}