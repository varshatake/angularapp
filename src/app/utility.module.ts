import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomdirDirective } from './customdir.directive';



@NgModule({
  declarations: [
    CustomdirDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class UtilityModule { 
  /**
   *
   */
  constructor() {
    console.log('utility Modulde called.');
    
    
  }
}
