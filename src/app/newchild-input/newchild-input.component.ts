import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-newchild-input',
  templateUrl: './newchild-input.component.html',
  styleUrls: ['./newchild-input.component.css']
})
export class NewchildInputComponent implements OnInit {

  //step 2 for @Input decorator
  @Input() courseInput:any; 

  constructor() { }

  ngOnInit() {
    console.log(`Courses List -->`,this.courseInput);
  }

}
