import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from '../product/laptop/laptop.component';
import { ProductComponent } from '../product/product.component';
import { TabletComponent } from '../product/tablet/tablet.component';
import { TvComponent } from '../product/tv/tv.component';
import { WashingmachineComponent } from '../product/washingmachine/washingmachine.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../utility.module';



@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TvComponent,
    WashingmachineComponent,
    TabletComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule,
  ]
})
export class ProductsModule { 
  /**
   *
   */
  constructor() {
    console.log('product Module called.');
    
    
  }
}
