import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customInputCounter, custoToggleAction } from '../states/counter.actions';
import { getToggle } from '../states/counter.selector';
import { Observable } from 'rxjs';
import { appStoreState } from 'src/store/app.store';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  customInputData: number = 0
  // toggleSelcetion: boolean = false
  toggleSelcetion$: Observable<boolean> | null = null

  private store = inject(Store<appStoreState>)

  ngOnInit() {
    // this.store.select(getToggle).subscribe((resp: any) => {
    //   this.toggleSelcetion = resp
    // })
    this.toggleSelcetion$ = this.store.select(getToggle)
    
  }

  onValueChange() {
    this.store.dispatch(customInputCounter({ value: this.customInputData }))
    // this.store.dispatch(customInput());
  }
  onToggleSelection() {

    this.store.dispatch(custoToggleAction())

  }
}
