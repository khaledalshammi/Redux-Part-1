import {DECREMENT,INCREMENT,DEC_BY_VALUE,INC_BY_VALUE,INC} from './type'
const counterReducer = (state={count:0},action) =>{
    switch(action.type){
        case INCREMENT:
            return {...state, count:state.count + 1}
        case DECREMENT:
            return {...state, count:state.count - 1}
        case INC_BY_VALUE:
            return {...state, count:state.count + 5}
        case DEC_BY_VALUE:
            return {...state, count:state.count - 5}
        case INC:
            return {...state, count:state.count + action.value}
        default:
            return state
    }
    // if(action.type===INCREMENT){
    //     return state.count + 1
    // }
    // if(action.type===DECREMENT){
    //     return state.count - 1
    // }
    // return state
}
export default counterReducer