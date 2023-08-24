import { Component, OnInit } from '@angular/core';
import { User1Service } from 'src/Services/user1.service';

@Component({
  selector: 'app-user1comp',
  templateUrl: './user1comp.component.html',
  styleUrls: ['./user1comp.component.css']
})
export class User1compComponent implements OnInit {

  postsearch:string ='';
  
  resObj1:any;
  constructor(private objpost:User1Service) { }

  ngOnInit() {
    //var respost = this.user1compservice.getposts();

    var obj = this.objpost.getPosts();

   obj.subscribe(res=> {
    this.resObj1 = res;
    console.log('user component1 getting response of /post fakeapi:',res)
   });

  }

}
