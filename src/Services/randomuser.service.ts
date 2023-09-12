import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

  url = 'https://randomuser.me/api/';
  //randomurl = 'https://api.api-ninjas.com/v1/randomuser';
  constructor(private http_client: HttpClient) { }

  randomUsers(): Observable<any> {
    let headers = new HttpHeaders({
      'X-Api-Key': 'OO/axfl/ON24SHrENVamsA==n2Kfe9pnBulfWmdC',
    })
    return this.http_client.get(this.url,{headers:headers});

  }

  specificUsers(userCount:any): Observable<any> {
    let headers = new HttpHeaders({
      'X-Api-Key': 'OO/axfl/ON24SHrENVamsA==n2Kfe9pnBulfWmdC',
    })
    return this.http_client.get('https://randomuser.me/api/?results='+userCount,{headers:headers});

  }
}
