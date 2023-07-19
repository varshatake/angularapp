import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchassignment',
  templateUrl: './ngswitchassignment.component.html',
  styleUrls: ['./ngswitchassignment.component.css']
})
export class NgswitchassignmentComponent implements OnInit {

  selectPlan:string;
  constructor() { }

  ngOnInit() {

  }
  getPlan(plan){
    this.selectPlan = plan.target.value;
    console.log(`NgSwitch Assignment on 18 july 23 :`,plan.target.value);
    
  }

}
