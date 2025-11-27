export interface CounterState {
    counter: number;
    toggle: boolean;
}
export const intialState: CounterState = {
    counter : 0,
    toggle: false
}