import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User1Service {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpclient: HttpClient) { }

  getPosts(){
    return this.httpclient.get(this.url);
  }

}
