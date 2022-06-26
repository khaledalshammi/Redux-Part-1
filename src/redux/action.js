import {DECREMENT,INCREMENT,INC_BY_VALUE,DEC_BY_VALUE,INC} from "./type";

export const I_Action=()=>{
    return{
        type: INCREMENT
    }
}
export const D_Action=()=>{
    return{
        type: DECREMENT
    }
}
export const DBV_Action=()=>{
    return{
        type: DEC_BY_VALUE
    }
}
export const IBV_Action=()=>{
    return{
        type: INC_BY_VALUE
    }
}
export const INC_Action=(vl)=>{
    return{
        type: INC,
        value: vl
    }
}