import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  isFormSubmitted = false;
  username = '';
  defaultCourseValue = 'JavaScript';
  colorIs : 'azure';

  isEmailValid : boolean = false;
  isEmail : boolean; 

  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'},
    { id: '3', value: 'Other'},
  ]

  formData = {
    username: '',
    email: '',
    course: '',
    country: '',
    state: '',
    gender:''
   }
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {

    this.isFormSubmitted = true;
    console.log('form submitted', form.value);
   
    let email = form.value.email;

    console.log('Email is', email);

    let country = form.value.address.country;

    console.log('user input country name is', country)

    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;
    // reser the form controls
    
    form.reset();
    //form.resetForm({course: 'Angular'});
    form.controls['course'].setValue(this.defaultCourseValue);
    //form.controls['course'].patchValue(this.defaultCourseValue);
    form.controls['email'].setValue('shaurya@gmail.com');    
    
    // to set default value for nested group
  //   console.log(form.controls['address']); 
  //   let objaddress = form.controls['address'];

  //   console.log('after getting address form group', objaddress);
  //  objaddress.controls['country'].patchValue('India');        
  }

  // resetform(form : NgForm) {
  //   form.resetForm({
  //     course : 'Javascript',
  //   });
  // }

  checkEmail(email) {
    console.log(email.target.value);

    const domain = email.target.value.substring(email.target.value.lastIndexOf('@') + 1);
    console.log('domain ',domain);

    if(domain == 'codemindtechnology.com') 
    {
      // false
      this.isEmailValid = false;
    }
    else {
      // true
      this.isEmailValid = true;
    }
  }
}
