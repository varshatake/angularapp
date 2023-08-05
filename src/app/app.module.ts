import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { NewchildInputComponent } from './newchild-input/newchild-input.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforassignmentComponent } from './ngforassignment/ngforassignment.component';
import { NgswitchassignmentComponent } from './ngswitchassignment/ngswitchassignment.component';
import { AttributedirComponent } from './attributedir/attributedir.component';
import { IscheckboxComponent } from './ischeckbox/ischeckbox.component';
import { CustomdirDirective } from './customdir.directive';
import { NgfordirectiveComponent } from './ngfordirective/ngfordirective.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { CountryComponent } from './country/country.component';
import { FormassignmentComponent } from './formassignment/formassignment.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenassignmentComponent } from './templatedrivenassignment/templatedrivenassignment.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    Demo3Component,
    DatabindingComponent,
    ChildComponent,
    Child2Component,
    NewchildInputComponent,
    NgIfComponent,
    DataBindingComponent,
    NgforComponent,
    NgswitchComponent,
    NgforassignmentComponent,
    NgswitchassignmentComponent,
    AttributedirComponent,
    IscheckboxComponent,
    CustomdirDirective,
    NgfordirectiveComponent,
    SimpleformComponent,
    CountryComponent,
    FormassignmentComponent,
    ReactiveformComponent,
    TemplatedrivenassignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
