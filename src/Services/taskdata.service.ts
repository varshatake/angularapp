import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  
  
  ownUrl = "http://localhost:3000/tasks";
  
  constructor(private http : HttpClient) { }

  create(alltask):Observable<any> {
    return this.http.post(`${this.ownUrl}`,alltask);
  }

  getTaskdata():Observable<any>{
    return this.http.get(this.ownUrl);
  }

  addTask(newTask) {
   return this.http.post(`${this.ownUrl}` + '/tasks',newTask);
   //httpOptions
  }

}
