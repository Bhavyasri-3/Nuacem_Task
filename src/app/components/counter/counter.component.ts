import { Component } from '@angular/core';

interface Counter {
  id: number;
  count: number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counters: Counter[] = [];
  nextId = 1;

  addCounter(){
    this.counters.unshift({id: this.nextId++, count:0});

  }

  increment(counter: Counter){
    counter.count++;
  }

  decrement(counter: Counter){
    counter.count--;
  }

  delete(counterId: number){
    this.counters = this.counters.filter(counter => counter.id !== counterId);
  }

  reset(){
    this.counters = [];
    this.nextId = 1;
  }
}
