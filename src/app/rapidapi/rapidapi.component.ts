import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RapidapiService } from 'src/Services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  rapidapiData;
  constructor(private rapidapiService:RapidapiService) { }

  ngOnInit() {
    this.showapidData();
  }

  showapidData() {
    this.rapidapiService.GetYahooFinance().subscribe(res => {
      console.log('from rapid api', res);
      this.rapidapiData = res;
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
