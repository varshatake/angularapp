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
    let params = new HttpParams().set('id',id);

    return this.http.delete( this.ownUrl +'tasks/', {params});
  }

  //UPDATE
  updateTask(editTask):Observable<any> {
    let params = new HttpParams().set('edittask', editTask)
    .set('id', editTask.id);

    return this.http.put(this.ownUrl +'tasks/', {params});
  }
  

  searchbyName(namequery : string) {
    const params = {
      name : namequery,
    };

    return this.http.get(this.ownUrl + 'tasks/', { params });
  }
}
