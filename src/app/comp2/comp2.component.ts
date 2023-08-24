import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/Services/service1.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  products = {};

  // I have injected my service into constuctor
  constructor(private objService: Service1Service) { }

  ngOnInit() {
    //const objService = new Service1Service();
    this.products = this.objService.products;
  }

hello() {
  //created object of service
  //const objService = new Service1Service();
  this.objService.hello();
}

sayHello(){
  //const objService = new Service1Service();
  console.log(this.objService);
  
}

}
