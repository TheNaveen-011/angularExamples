import { createReducer, on } from "@ngrx/store";
import { intialCourseState } from "./course.state";
import { getCourse } from "./course.action";

export const courseReducer = createReducer(
    intialCourseState,
    on(getCourse, (state) =>{
        return {
            ...state,
            
        }
    } )
)