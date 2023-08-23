import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgeserviceService } from 'src/Services/ageservice.service';

@Component({
  selector: 'app-agecomp1',
  templateUrl: './agecomp1.component.html',
  styleUrls: ['./agecomp1.component.css']
})
export class Agecomp1Component implements OnInit {

  birthdate: string;
  age: number;

  constructor(private objAgeservice : AgeserviceService) { }

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
