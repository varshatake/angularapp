import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  //label:string = 'Username';
  @Input() str:string;

  isButtonClick:boolean;

  disableFun(){
    if(this.str==''){
      return this.isButtonClick = true;
    }
    else if(this.str != '') {
      return this.isButtonClick = false;
    }
  }

  clearMe(){
      return this.str = '';
  }

  constructor() { }

  ngOnInit() {
  }

  
}
