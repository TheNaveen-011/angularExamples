import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "./course.state";

export const getCoursesState = createFeatureSelector<CourseState>('courses');

export const getCourses = createSelector(getCoursesState, (state) =>{
    return state.courses
})
