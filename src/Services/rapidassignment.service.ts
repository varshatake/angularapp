import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidassignmentService {

  rapidurl = 'https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates?base_currency&languagecode';
  constructor(private httpclient:HttpClient) { }

  getBookings() {

    let headers = new  HttpHeaders ({
      'X-RapidAPI-Key': 'c03dadbc3bmshe894ada824c4ed1p115b1ejsn866b829821ac',
      'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
    })
    return this.httpclient.get(this.rapidurl,{headers:headers})
  }

}
