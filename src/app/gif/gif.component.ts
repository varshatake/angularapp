import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/Services/gif.service';


@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  searchString : any = '';
  // searchAnything : any = '';
  resObject : any[];
  // resObject1 = [];

  page:number=1;
  totalPages :any;

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.creategifData();
  }

  creategifData(){
    this.gifService.giphyData().subscribe(resp => {
      console.log('only Response :',resp);
      this.resObject = (resp['data']);
      console.log('Fetched Data from Giphy :',this.resObject);
      this.totalPages = this.resObject.length;
    })
  }

  gifQuery() {
    const text = this.searchString.queryparam;
    // const searcharr = this.searchAnything.searchtext;
    this.gifService.gifQuery(text).subscribe((gifData:any) => {
      console.log('gifData : ',gifData);
      this.resObject = (gifData['data']);
      console.log('gif responseObject Data:',this.resObject);
      console.log('searchString queryParameter :',this.searchString);
      // console.log('search anything :',this.searchAnything);
      this.totalPages = this.resObject.length;
    })
  }

}
