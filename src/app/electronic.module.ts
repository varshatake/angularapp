import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CameraComponent } from './electronics/camera/camera.component';
import { ComputerperipheralComponent } from './electronics/computerperipheral/computerperipheral.component';
import { PowerbankComponent } from './electronics/powerbank/powerbank.component';
import { SmartlightsComponent } from './electronics/smartlights/smartlights.component';
import { UtilityModule } from './utility.module';

const electronicRoutes : Routes = [
  { path : '',component:ElectronicsComponent, children : [
    {path:'camera',component:CameraComponent},
    {path:'computerperipheral',component:ComputerperipheralComponent},
    {path:'powerbank',component:PowerbankComponent},
    {path:'smartlights',component:SmartlightsComponent},
  ]},
]

@NgModule({
  declarations: [
    ElectronicsComponent,
    CameraComponent,
    ComputerperipheralComponent,
    PowerbankComponent,
    SmartlightsComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(electronicRoutes),
    UtilityModule,
  ]
})
export class ElectronicModule { 
  /**
   *
   */
  
}
