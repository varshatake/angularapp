import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  myForm: FormGroup;
  isFormSubmitted: boolean = false;
  
  notAllowedNames = ['demoproject', 'demoproject1'];
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }


  ngOnInit() {
    setTimeout(() => {
      this.myForm.patchValue({
        'userDetails' : {
          'email': 'shaurya@gmail.com'
        }
      })
  }, 5000)
  }

  createForm() {
    
    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        username : ['', [Validators.required, this.NameNotAllowed.bind(this)]],
        email: ['', [Validators.required, Validators.email], this.EmailNotAllowed ]
      }),
      course: ['Finished'],
    })
  }

  resetForm() {
    this.myForm.reset({
      'userDetails' : {
        'username': '',
        'email': ''
      },
      'course': 'Stable',
    
    });
  }

  OnSubmit() {
    this.isFormSubmitted = true;
    console.log('Submit method called', this.myForm);
    console.log('form data :',this.myForm.value);
    
   // this.resetForm();
    // this.myForm.reset();
  }

  
  NameNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}
    }
    return null;
  }

  EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
    const myPromise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {

        if (control.value === 'abc@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 1000)
    })
    return myPromise;
  }

}
  






  
  
  

  