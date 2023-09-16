import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private wikiUrl = 'https://en.wikipedia.org/w/api.php';
 
  constructor(private httpc : HttpClient) { }

  searchS(query: string) {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: query,
      origin: '*'
    };

    return this.httpc.get(this.wikiUrl, { params });
  }
            
}
