import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

count:number=0;

Increment(): number {
  this.count = this.count + 1;
  return this.count;
}

Decrement(): number {
  this.count = this.count - 1;
  return this.count;
}

}
