import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ischeckbox',
  templateUrl: './ischeckbox.component.html',
  styleUrls: ['./ischeckbox.component.css']
})
export class IscheckboxComponent implements OnInit {

  
  isChecked:boolean;
  colorValue = '#000000';
  constructor() { }

  ngOnInit() {
  }

  onChange(checkValue){
    console.log(checkValue.target.checked);
    this.isChecked = checkValue.target.checked;
  }

}
