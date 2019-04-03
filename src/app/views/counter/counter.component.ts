import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: number;

  constructor() {
    this.counter = 0;
    this.counterChange.subscribe(
      () => this.output = this.counter
    );
  }

  decreaseCounter() {
    this.counter--;
    this.counterChange.emit();
  }

  increaseCounter() {
    this.counter++;
    this.counterChange.emit();
  }
}
