import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityModule } from '../utility.module';
import { RouterModule , Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { LaptopComponent } from '../product/laptop/laptop.component';
import { TvComponent } from '../product/tv/tv.component';
import { TabletComponent } from '../product/tablet/tablet.component';
import { WashingmachineComponent } from '../product/washingmachine/washingmachine.component';

const productsroutes : Routes = [
  {path: '',component:ProductComponent,children:[
    {path: 'laptop', component: LaptopComponent},
    { path: 'tv', component: TvComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ] },
]

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
    RouterModule.forChild(productsroutes),
    UtilityModule,
  ]
})
export class ProductsModule { 
  /**
   *
   */
  constructor() {
    console.log('products Module called.');
    
    
  }
}
