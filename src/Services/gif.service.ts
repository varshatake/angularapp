import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  gifsUrl = 'https://api.giphy.com/v1/gifs';
  apikey = 'jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif';
  t= '/trending';
  s= '/search';

  constructor(private h:HttpClient) { }

  giphyData():Observable<any> {
    const params = new HttpParams().set('api_key',this.apikey);

    return this.h.get(`${this.gifsUrl}`+ this.t , {params});
    }

  gifQuery(queryparam):Observable<any> {
    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('q',queryparam);

    return this.h.get(`${this.gifsUrl}` + this.s , {params});

  }
  
}
