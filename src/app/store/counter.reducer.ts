import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset, setCount } from "./counter.actions";


export interface CounterState {
    count: number;
    isLoggedIn: boolean;
  }
  
  export const initialState = 0;
  
  export const counterReducer = createReducer(
    initialState,
   on(increment, state => {
    console.log(state);
    return state + 1}),
   on(decrement, state => state - 1 ),
   on(setCount,(state,{count})=>{
    console.log(count);
    return state+count;}
   )

   
  );