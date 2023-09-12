import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/Services/utility.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  user:any;
  constructor(private utilityService:UtilityService) { }

  ngOnInit() {
    this.utilityService.user.subscribe((res) => {
      this.user = res;
      console.log('res from subject', res);
      
     });
  }

  updateUserName(uname: any, upass: any, email:any ){
    this.utilityService.user.next({
      username: uname.value,
      passwword: upass.value,
      email:email.value,
   
    });
  }

}
