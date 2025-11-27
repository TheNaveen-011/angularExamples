import { createReducer, on } from "@ngrx/store";
import { intialState } from "./counter.state";
import { customInputCounter, custoToggleAction, decrement, increment, reset } from "./counter.actions";

export const counterReduce = createReducer(
    intialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter -1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customInputCounter, (data, action) => {
        console.log(action);
        
        return{
        ...data,
        counter: action.value + data.counter
        }
    }),
    on(custoToggleAction, (state) =>{
        return {
            ...state,
            toggle : !state.toggle
        }
    })
)