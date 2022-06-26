// import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {INCREMENT,DECREMENT} from '../redux/action';
import {I_Action,D_Action,DBV_Action,IBV_Action, INC_Action} from '../redux/action'
export default function Counter(){
    //use selector to get what we want 
    //we will take count from state
    const countState = useSelector(state => state.count)
    // same
    // const {count} = useSelector(state => state);
    const dispatch = useDispatch();
    // const [count,setcount] = useState(0);
    // const handleIncrement = ()=>{
    //     setcount(count+1)
    // }
    // const handleDecrement = ()=>{
    //     setcount(count-1)
    // }
    const HIR = () =>{
        dispatch(
            // {type: INCREMENT}
            I_Action()
        );
    }
    const HDR = () =>{
        dispatch(
            // {type: DECREMENT}
            D_Action()
        );
    }
    const HIR_5 = () =>{
        dispatch(
            IBV_Action()
        );
    }
    const HDR_5 = () =>{
        dispatch(
            DBV_Action()
        );
    }
    const INC_INC = (vl) =>{
        dispatch(
            // {type: DECREMENT,value:val}
            INC_Action(vl)
        );
    }
    return(
        <div>
            {/* <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button> */}
            <p>{countState}</p>
            <button onClick={HIR}>Increment</button>
            <button onClick={HDR}>Decrement</button> 
            <br/>
            <button onClick={HIR_5}>Increment BY 5</button>
            <button onClick={HDR_5}>Decrement BY 5</button>
            <br/>
            <button onClick={()=>INC_INC(3)}>Increment BY 3</button>
        </div>
    )
}