import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AgeserviceService {

  birthdate: Date;
  age: number;
  
  constructor() { }

  calculateAgeService(birthdate) {
      const timeDiff = +new Date(Math.abs(Date.now()) - +new Date(birthdate));
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      //console.log(this.age);
  }

  // ageform(form : NgForm) {
  //   console.log('Age form :',form.value);
    
  // }
}
