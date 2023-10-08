import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  
  ownUrl = "http://localhost:3000/tasks";
  
  constructor(private http : HttpClient) { }

  create(alltask):Observable<any> {
    return this.http.post( this.ownUrl ,alltask);
  }

  //GET 
  getTaskdata():Observable<any>{
    return this.http.get(this.ownUrl);
  }

  //POST - save new task
  addTask(newTask) {
   return this.http.post( this.ownUrl + '/tasks',newTask);
   //httpOptions
  }

  //DELETE
  deleteTask(id:any):Observable<any>{
    return this.http.delete( this.ownUrl +'tasks/', id);
  }

  //UPDATE
  updateTask(id:any ,editTask:any):Observable<any> {
    return this.http.put(this.ownUrl +'tasks/'+ id, editTask);
  }
  

  searchbyName(namequery : string) {
    const params = {
      name : namequery,
    };

    return this.http.get(this.ownUrl + 'tasks/', { params });
  }
}
