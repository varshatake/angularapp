import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //inject the user service into constructor
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(res => {
      console.log('from user component :',res);
      
    });
  }

}
