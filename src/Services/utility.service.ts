import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  //userName = new Subject<any>();
//  userName = new BehaviorSubject('UI developer');

 userName = new BehaviorSubject('UI developer');
user=new BehaviorSubject({ username: '', passwword: '',email: ''});

  constructor() { }
}
