import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  products = [
    { name: 'laptop', id: '101'},
    { name: 'Mobile', id: '102'},
    { name: 'TV', id: '103'},
    { name: 'TAB', id: '104'},

  ]


  constructor() { }

  hello(){
    alert('hello all');
    
  }
}
