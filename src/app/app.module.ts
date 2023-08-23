import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

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
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Agecomp1Component } from './agecomp1/agecomp1.component';
import { Agecomp2Component } from './agecomp2/agecomp2.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ReactiveassignmentComponent } from './reactiveassignment/reactiveassignment.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { RformComponent } from './rform/rform.component';
import { FilterPipe } from './filter.pipe';
import { CountPipe } from './count.pipe';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


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
    TemplatedrivenassignmentComponent,
    Comp1Component,
    Comp2Component,
    Agecomp1Component,
    Agecomp2Component,
    UserComponent,
    ReactiveassignmentComponent,
    PipedemoComponent,
    FilterpipeComponent,
    RformComponent,
    FilterPipe,
    CountPipe,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
