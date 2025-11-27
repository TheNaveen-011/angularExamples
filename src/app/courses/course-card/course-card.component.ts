import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.models';
import { appStoreState } from 'src/store/app.store';
import { getCourses } from '../states/course.selectors';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  courses$: Observable<Course[]> | null = null

  private store = inject(Store<appStoreState>)

  ngOnInit(){
    this.courses$ = this.store.select(getCourses)
  }


}
