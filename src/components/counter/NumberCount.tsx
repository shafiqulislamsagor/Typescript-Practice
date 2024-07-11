import { useReducer } from "react"

type CounterState = {
    value:number
}

type CounterAction = {
    type:string , 
    payload:number
}

const initialState = {value:0}

function counterReducer(state:CounterState , action:CounterAction){
    switch(action.type){
        case 'increment':
            return {value:state.value + action.payload}
        case 'decrement':
            return {value:state.value - action.payload}
        default:
            return state
    }
}


const NumberCount = () => {
    const [stated, dispatch] = useReducer(counterReducer, initialState)
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-500">Count: {stated.value}</h2>
            <button onClick={()=> dispatch({type:'increment',payload:1})}>Increment</button>
            <button onClick={()=> dispatch({type:'decrement' , payload:1})}>Increment</button>
        </div>
    );
};

export default NumberCount;