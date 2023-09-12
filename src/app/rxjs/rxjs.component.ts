import { Component, OnInit } from '@angular/core';
import {Subscription, from} from 'rxjs';
import { filter, take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  sub:Subscription;
  users =  [
    {name: 'Dnyanesh', id: '101', gender: 'Male'},
    {name: 'Test', id: '102', gender: 'Female'},
    {name: 'Jack', id: '103', gender: 'Male'}

  ]

  
  randomNames = ['Dnyanesh', 'codemind', 'Angular', 'HTML', 'JavaScript'];
  constructor() { }

  ngOnDestroy(){
    this.sub.unsubscribe;
  }

  ngOnInit() {
    const source = from([
      {name: 'Joe', age: 37},
      {name: 'Jack', age: 25},
  
    ]);
  
    // filter out the people with age unser 30 
    const result = source.pipe(filter(p=> p.age >= 30));

  result.subscribe(res=> {
    console.log('after filter value', res);
  });


  const obs = from(this.randomNames);

    obs.pipe(
      take(2)
    ).subscribe(res => {
      console.log('take top 2', res)
    });

    const obs1 = from(this.randomNames);

    obs1.pipe(
      takeLast(2)
    ).subscribe(res => {
      console.log('take top 2', res)
    })
  }

  

  
}
