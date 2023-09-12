import { Component, OnInit } from '@angular/core';
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
  }

  search() {
    this.wikipediaservice.search(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.query.search;
      console.log(data.query.search);
      
    });
  }

  
}


