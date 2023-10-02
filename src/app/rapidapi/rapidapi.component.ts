import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RapidapiService } from 'src/Services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  rapidapiNewsData=[];
  //rapidapiQuotes=[];
  constructor(private rapidapiService:RapidapiService) { }

  ngOnInit() {
    this.showapidData();
  }

  showapidData() {
    this.rapidapiService.GetYahooFinance().subscribe(res => {
      console.log('from rapid api', res);
      this.rapidapiNewsData = res.news;
      console.log('news data :',this.rapidapiNewsData);
      // this.rapidapiQuotes = res.quotes;
      // console.log('from Quotes data :',this.rapidapiQuotes);
    })
  }

  GetMarketData() {
    this.rapidapiService.getDataFormMarket('US','AMD').subscribe(res => {
      console.log('rapid market data', res);
    })
  }

  getMovers() {
    this.rapidapiService.getMovers().subscribe(res => {
      console.log('get movers', res);
    })
  }

}
