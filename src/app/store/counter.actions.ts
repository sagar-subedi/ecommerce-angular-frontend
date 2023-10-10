import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const setCount = createAction('[Counter] Set Count', props<{ count: number }>());
