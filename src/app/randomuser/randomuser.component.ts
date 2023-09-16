import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RandomuserService } from 'src/Services/randomuser.service';

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.css']
})
export class RandomuserComponent implements OnInit {

  objrandom =[];
  obj;
  //particularUser:any;
  searchUserForm: FormGroup;
  
  
  constructor(private randomService: RandomuserService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchUserForm = this.formBuilder.group({
      userCount: ['', Validators.required]      
  });
   this.displayRandomuser();
  
  }

  displayRandomuser() {
    this.randomService.randomUsers().subscribe(resp => {
      console.log('Random user data :',resp);
      this.obj = resp;
      this.objrandom = resp.results;
    })
  }

  displaySpecificmuser() {  

  //   if (this.searchUserForm.invalid) {
  //     return;
  // }  
  //
    this.randomService.specificUsers(this.searchUserForm.value.userCount).subscribe(resp => {
      console.log('Random user data :',resp);
      this.obj = resp;
      this.objrandom = resp.results;
    })
  }
}
