import { counterReduce } from "src/app/counter/states/counter.reducer";
import { CounterState } from "src/app/counter/states/counter.state";
import { courseReducer } from "src/app/courses/states/course.reducer";

export interface appStoreState  {
    counter: CounterState,
    courses: CounterState
}

export const storeReducer = {
    counter: counterReduce,
    courses: courseReducer
}