import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataInput: string;
  
  data:string='varsha';

  //step 1 for @output with event emmitter
  @Output() foodEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(`Input data from parent -->`,this.dataInput);
    
  }

   //step 2 for @output with event emmitter
  addToFood() {
    this.foodEvent.emit('Banana');
  }

}
