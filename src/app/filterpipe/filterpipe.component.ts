import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styles: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {

  namesearch: string = '';
  prodcutArr: any[] = [
    {
      prodNo: 1,
      productName: 'Mobile',
      productPrice: '50000 RS',
      availability: 'Available'

    },
    {
      prodNo: 2,
      productName: 'TV',
      productPrice: '150000 RS',
      availability: 'Available'

    },
    {
      prodNo: 3,
      productName: 'Washing Machine',
      productPrice: '150000 RS',
      availability: 'Not Available'

    },
    {
      prodNo: 4,
      productName: 'Tab',
      productPrice: '35000 RS',
      availability: 'Available'

    }
  ]
  
  AddProduct(prodname: any){
    this.prodcutArr.push({
      prodNo: 5,
      productName:prodname ,
      productPrice: '35000 RS',
      availability: 'Available'
    })
  }


  constructor() { }

  ngOnInit() {
  }

}
