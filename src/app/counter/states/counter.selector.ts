import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getSelector = createFeatureSelector<CounterState>('counter')

export const getCounter = createSelector(getSelector, (state) =>{
    return state.counter;
})

export const getToggle = createSelector(getSelector, (state) =>{
return state.toggle
})