import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reactiveassignment',
  templateUrl: './reactiveassignment.component.html',
  styleUrls: ['./reactiveassignment.component.css']
})
export class ReactiveassignmentComponent implements OnInit {

  myReactiveform : FormGroup;
  isRformsubmitted:boolean = false;

  projectnameNotAllowed: ['projectcodemind','projecttechnology'];

  emailNotTaken:boolean;
  
  constructor(private fb: FormBuilder) {
    this.createReactiveform();
   }

  ngOnInit() {
  }

  createReactiveform(){
    this.myReactiveform = new FormGroup({
      projectname : new FormControl(null,[Validators.required,this.projectNameNotAllowed.bind(this)]),
      email: new FormControl('@codemind.com',[Validators.required,Validators.email,this.EmailNotTaken]),
      projectstatus : new FormControl('stable')
    });
  }

  resetForm() {
    this.myReactiveform.reset({
      projectname : 'demoproject',
      email: '',
      projectstatus:'stable'
    });
  }

  OnSubmitt(){
    if (this.myReactiveform.valid) {
      this.isRformsubmitted = true;
      console.log('on submit method called',this.myReactiveform);
      console.log('Reactive form values :',this.myReactiveform.value); 
    }
    console.log('on submit method called',this.myReactiveform);
    this.resetForm();
  }

  projectNameNotAllowed(control: FormControl) {
    if (this.projectnameNotAllowed.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'projectnameNotAllowed': true}
    }
    return null;
  }

  EmailNotTaken(control: FormControl) : Promise<any> | Observable<any> {
    const myformPromise = new Promise<any>((resolve,reject) => {
      setTimeout( () => {
  
        if (control.value === 'sonali9@gmail.com') {
          resolve({'emailNotTaken': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myformPromise;
  }
  


}



