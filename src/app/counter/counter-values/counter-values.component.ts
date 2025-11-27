import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../states/counter.selector';
import { appStoreState } from 'src/store/app.store';

@Component({
  selector: 'app-counter-values',
  templateUrl: './counter-values.component.html',
  styleUrls: ['./counter-values.component.scss']
})
export class CounterValuesComponent {
  private store = inject(Store<appStoreState>)
  // count: number = 0;
  count$: Observable<number> | null = null;
  counterSubscription: Subscription | null = null

  ngOnInit(){
    // this.counterSubscription = this.store.select(getCounter).subscribe( (data) =>{
    //   this.count = data
    // })
    this.count$ = this.store.select(getCounter)
  }
  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe()
      console.log("this is feature branch broo");
      
    }

  }
}
