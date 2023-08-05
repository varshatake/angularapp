import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  isFormSubmitted: boolean = false;

  myForm : FormGroup;
  genders :any =  [
    {id : '1', value: 'Male'},
    {id :'2', value:'Female'},
    {id:'3',value:'Other'}
  ]

  notAllowedNames = ['Codemind','Technology'];

  emailNotAllowed:boolean;
  constructor(private fb : FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    console.log('ngOnInit called');

  //   setTimeout(() => {
  //     this.myForm.setValue({
  //       'userDetails' : {
  //         'username': 'Codemind1122',
  //         'email': 'codemind@outlook.com'
  //       },
  //       'course' : 'JavaScript',
  //       'genders': 'Female',
  //       'skills': ['Azure']
  //     })
  // }, 5000)

  setTimeout(() => {
    this.myForm.patchValue({
      'userDetails' : {
        'email' : 'jennefer11@gmail.com'
      }
    })
  },3000);
    
  }

  createForm() {
  //   this.myForm = new FormGroup({
  //     'userDetails': new FormGroup({
  //       'username': new FormControl(null,[Validators.required,this.NameNotAllowed.bind(this)]),
  //     'email': new FormControl('@codemind.com',[Validators.required,Validators.email],this.EmailNotAllowed),
  //     }),
  //     'course': new FormControl('Angular'),
  //     'genders': new FormControl('Male'),
  //     'skills': new FormArray([new FormControl('Angular8',Validators.required)]) 
  //   })

  this.myForm = this.fb.group({
    userDetails: this.fb.group({
      username : ['', [Validators.required, this.NameNotAllowed.bind(this)]],
      email: ['', [Validators.required, Validators.email], this.EmailNotAllowed ]
    }),
    course: ['Angular'],
    genders: ['Female'],
    skills: this.fb.array([])
  });
}
 
  resetForm() {
      this.myForm.reset({
        'userDetails' : {
          'username': '',
          'email': ''
        },
        'course': 'Angular',
        'genders': 'Female',
        'skills': ['']
      });
  }

  OnSubmit() {
    if(this.myForm.valid){
      this.isFormSubmitted = true;
    console.log('Submit method called', this.myForm);
    console.log('Forms value :',this.myForm.value);
    
    }
    console.log('Submit method called', this.myForm);
  
    this.resetForm(); 
  }

  OnAddSkills() {
    var skillArr = this.myForm.get('skills') as FormArray;
    skillArr.push(new FormControl('Typescript',Validators.required));
    
    //(<FormArray>this.myForm.get('skills')).push(new FormControl('Javascript',Validators.required))
    
  }

  OnRemove(index: number){
    var skillarr = this.myForm.get('skills') as FormArray;
    skillarr.removeAt(index);
  }

  NameNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}
    }
    return null;
  }

  EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
    const myPromise = new Promise<any>((resolve,reject) => {
      setTimeout( () => {

        if (control.value === 'varsha123@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myPromise;
  }
}


