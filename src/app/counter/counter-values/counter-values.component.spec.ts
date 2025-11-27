import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterValuesComponent } from './counter-values.component';

describe('CounterValuesComponent', () => {
  let component: CounterValuesComponent;
  let fixture: ComponentFixture<CounterValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterValuesComponent]
    });
    fixture = TestBed.createComponent(CounterValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
