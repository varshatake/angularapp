import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  data: string = 'Angular Batch 7';

  //step1 for @input() decorator 
  courses: any = ["Data Science","Automation Testing","Angular","React","Web Designer"];
  
  //step 5 for @output with event emmitter
  getDataFromChild(value) {
    console.log(value);   
   }
}
