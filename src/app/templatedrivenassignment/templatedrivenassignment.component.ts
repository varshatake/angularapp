import { Component, OnInit } from '@angular/core';
import { FormGroup ,NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenassignment',
  templateUrl: './templatedrivenassignment.component.html',
  styleUrls: ['./templatedrivenassignment.component.css']
})
export class TemplatedrivenassignmentComponent implements OnInit {

  fullname: '';
  defaultGender : 'Female';
  defaultCountry : 'India';
  username : '';

  whenFormsubmit : boolean = false;
  confirmpassword : boolean;
  bio: '';

  formControldata : {
    fullname: '',
    birthdate : '',
    Gender : '',
    countrydropdown: '',
    phone : '',
    bio : '',
    username: '',
    email: '',
    password: '',
    confirmPwd: '',
  }

  constructor() { }

  ngOnInit() {
  }

  tFormsubmit(tform: NgForm) {
    this.whenFormsubmit = true;
    console.log(tform);
    
     console.log('Template driven form :',tform.value);

     let email = tform.value.email;
     console.log('Emai address :',email);

     let fname = tform.value.fullname;
     console.log(`Fullname is -->`,fname);
     

     this.formControldata.fullname = tform.value.fullname;
     this.formControldata.birthdate = tform.value.birthdate;
     this.formControldata.Gender = tform.value.Gender;
     this.formControldata.countrydropdown = tform.value.countrydropdown;
     this.formControldata.phone = tform.value.phone;
     this.formControldata.bio = tform.value.bio;
     this.formControldata.username = tform.value.username;
     this.formControldata.email = tform.value.email;
     this.formControldata.password = tform.value.password;
     this.formControldata.confirmPwd = tform.value.confirmPwd;
     
    //  tform.reset();

    //  tform.controls['email'].setValue('jenny@gmail.com');
    //  tform.controls['countrydropdown'].setValue(this.defaultCountry);
    
   }

  //  onconfirmpwdchange() {
  //   if(this.formControldata.password === this.formControldata.confirmPwd) {
  //     return this.confirmpassword =  true; 
  //   }
  //   else{
  //     return this.confirmpassword = false;
  //   }
  //  }

   
}
