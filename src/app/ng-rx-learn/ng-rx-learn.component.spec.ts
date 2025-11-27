import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxLearnComponent } from './ng-rx-learn.component';

describe('NgRxLearnComponent', () => {
  let component: NgRxLearnComponent;
  let fixture: ComponentFixture<NgRxLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgRxLearnComponent]
    });
    fixture = TestBed.createComponent(NgRxLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
