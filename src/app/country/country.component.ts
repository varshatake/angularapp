import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  states : string[]=[];
  countries:string[] = [
    "Indis", "USA"
  ]

  ngOnInit() {
  }

  getStates(event){
    let selectedcountry = event.target.value;
    console.log(selectedcountry);
    this.states=[];
    if(selectedcountry=="india"){
     this.states.push("Marashtra");
     this.states.push("Gujrat");
     this.states.push("Karnatak");
     this.states.push("Madhya Pradesh");
    }
    else if(selectedcountry=="usa"){
     this.states.push("California");
     this.states.push("Texas");
     this.states.push("Florida");
     this.states.push("Hawaii ");
    }
    
   }
}
