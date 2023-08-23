import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgeserviceService } from 'src/Services/ageservice.service';

@Component({
  selector: 'app-agecomp2',
  templateUrl: './agecomp2.component.html',
  styleUrls: ['./agecomp2.component.css']
})
export class Agecomp2Component implements OnInit {

  
  constructor(private objAgeservice : AgeserviceService) { }

  birthdate: string;
  age: number;

  ngOnInit() {
  
    
  }

  CalculateAge(birthdate)
  {
      if(this.birthdate){
      this.objAgeservice.calculateAgeService(birthdate);
      this.age = this.objAgeservice.age;
      //console.log('value is: ' +this.age );
     }
  }

  ageform(form : NgForm) {
    console.log('Age form :',form.value);
    
  }

}
