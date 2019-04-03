import {Component, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  star$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      (result => result.matches)
    );
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: number;

  constructor(private breakpointObserver: BreakpointObserver) {
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
