import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route) { }

  ngOnInit() {
  }

  login(email, pass) {
    console.log(email.value, pass.value);
    this._route.navigate(['home']);
  }


  
}
