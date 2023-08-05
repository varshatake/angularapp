import { Component, OnInit } from '@angular/core';
import { Countries, States } from '../models/country';

@Component({
  selector: 'app-ngfordirective',
  templateUrl: './ngfordirective.component.html',
  styleUrls: ['./ngfordirective.component.css']
})
export class NgfordirectiveComponent implements OnInit {

  country: Countries[] = [
    {countryName: 'India',countryId:'1'},
    {countryName: 'Canada',countryId:'2'},
    //{country: 'USA',countryId:'3'},
    ];
    
  state: States[] = [
    {sid:'1',stateName: 'Maharashtra',countryId:'1'},
    {sid:'2',stateName: 'Ontario',countryId:'2'},
    {sid:'3',stateName: 'Alberta',countryId:'2'},
    {sid:'4',stateName:'Britsh Columbia',countryId:'2'},
    {sid:'5',stateName: 'Quebec',countryId:'2'},
    {sid:'6',stateName: 'Rajsthan',countryId:'1'},
    {sid:'7',stateName: 'Bihar',countryId:'1'},
    {sid:'8',stateName: 'Aassam',countryId:'1'},
    {sid:'9',stateName: 'Dehli',countryId:'1'}
  ]

  getstateById(val) {
    console.log(val);
    let selected = val.target.value;
    const newState = this.state.filter(x => x.countryId == selected);
    console.log('Newly created Array :',newState);

  }
  constructor() { }

  ngOnInit() {
  }

}
