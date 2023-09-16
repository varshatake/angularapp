import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { WikipediaService } from 'src/Services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {

  searchTerm = '';
  searchResults: any[];
  constructor(private wikipediaservice:WikipediaService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.wikipediaservice.searchS(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.query.search;
      console.log('wikipedia Assignment data :',data.query.search);
      console.log('searchresults :',this.searchResults);
      
      
    });
  }

  
}


