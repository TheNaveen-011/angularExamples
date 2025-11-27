import { Component, EventEmitter, inject, Output } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter.actions';
import { appStoreState } from 'src/store/app.store';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {

  // @Output() onIncrementEvent: EventEmitter<void> = new EventEmitter<void>();
  // @Output() onDecrementEvent: EventEmitter<void> = new EventEmitter<void>();
  // @Output() resetCountEvent: EventEmitter<void> = new EventEmitter<void>();

  private store = inject(Store<appStoreState>)
  constructor(
    // private store : Store<{counter:{counter : number}}>
  ){}

  onIncrement() {
    // this.onIncrementEvent.emit();
    this.store.dispatch(increment())
  }

  onDecrement() {
    // this.onDecrementEvent.emit();
    this.store.dispatch(decrement())
  }

  resetCount() {
    // this.resetCountEvent.emit();
    this.store.dispatch(reset())
  }
}
