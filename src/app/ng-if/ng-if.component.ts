import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/Services/service1.service';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
  providers : [Service1Service]
})
export class NgIfComponent implements OnInit {

  show:boolean =true;

  showActions: boolean = true;
  constructor(private objservice : Service1Service) { }

  ngOnInit() {
    this.objservice.hello;
  }

}
