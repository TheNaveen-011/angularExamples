import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgRxLearnComponent } from './ng-rx-learn/ng-rx-learn.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { CounterValuesComponent } from './counter/counter-values/counter-values.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { StoreModule } from '@ngrx/store';
import { counterReduce } from './counter/states/counter.reducer';
import { CustomInputComponent } from './counter/custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { courseReducer } from './courses/states/course.reducer';
import { storeReducer } from 'src/store/app.store';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NgRxLearnComponent,
    HomeComponent,
    CoursesComponent,
    CounterComponent,
    HeaderComponent,
    CounterValuesComponent,
    CounterButtonComponent,
    CustomInputComponent,
    CourseCardComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(storeReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
