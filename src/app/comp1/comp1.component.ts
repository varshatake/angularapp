import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/Services/service1.service';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  products = {};

  resObj : any;
  
  // I have injected my services into constuctor
  constructor(private objService: Service1Service,private objUser : UserService) { }

  ngOnInit() {
    //const objService = new Service1Service();
    this.products = this.objService.products;

    
    //call get user method from users service
    var obj = this.objUser.getUsers();

   obj.subscribe(res=> {
    this.resObj = res;
    console.log('Comp1 getting response :',res)
   });

  }



 hello() {
  //created object of service
  //const objService = new Service1Service();
  this.objService.hello();
 } 
}
