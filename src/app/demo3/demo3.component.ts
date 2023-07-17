import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  //inline template
  template: `<div> This is inline template </div>`,
  //templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
