import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/Services/utility.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

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
