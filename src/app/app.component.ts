import { Component } from '@angular/core';
import {Subscription, from, interval, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularapp Batch-7';

  data: string = 'red';

  isDestroy:boolean = true;


  //sub : Subscription;
  //step1 for @input() decorator 
  courses: any = ["Data Science","Automation Testing","Angular","React","Web Designer"];
  
  //step 5 for @output with event emmitter
  getDataFromChild(value) {
    console.log(value);   
   }

   OnTextValuCHanges(val){
    this.data = val.value;
    alert(val.value);
  }

  OnDestroy(){
    this.isDestroy = false;
    //this.sub.unsubscribe;
  
  }

  ngOnInit() {
    // const sourceof = of([1,2,3]);
    // sourceof.subscribe(resof => {
    //   console.log('of rxjs :',resof);
    // });

    // const sourcefrom = from([1,2,3,4]);
    // sourcefrom.subscribe(resfrom => {
    //   console.log('from rxjs :',resfrom);
    // });

    // const streamVideo = interval(10);
    // streamVideo.pipe(map(data =>data * 2))
    // .subscribe(resmap => {
    //   console.log('map from rxjs:',resmap);
    // });
  }
}
