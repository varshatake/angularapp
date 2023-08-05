import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formassignment',
  templateUrl: './formassignment.component.html',
  styleUrls: ['./formassignment.component.css']
})
export class FormassignmentComponent implements OnInit {

  username: string;
  phoneno: number;
  defaultCourse = 'Computer Science';
  
  colorval: 'white';

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(`Form submitted :`,form.value);
    let email = form.value.email;

    console.log('Email is', email);

    let country = form.value.address.country;

    console.log('user input country name is', country)

  
  }

  Onclear(){
    return '';
   }

}
