import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  name: string = 'Jack sparrow';

  imageURL:string= "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.1524880095.1681265094&semt=sph";
  isDisabled = false;

  data = {
    id : '101',
    name : 'Harry' 
  }

  department:string= 'IT';
  constructor() { }

  ngOnInit() {
  }



SaveData() {
  alert(`Button Clicked for even Binding`);
}

}