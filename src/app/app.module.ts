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
//import { CustomdirDirective } from './customdir.directive';
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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ReactiveassignmentComponent } from './reactiveassignment/reactiveassignment.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { RformComponent } from './rform/rform.component';
import { FilterPipe } from './filter.pipe';
import { CountPipe } from './count.pipe';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { User1compComponent } from './user1comp/user1comp.component';
import { UserpipePipe } from './userpipe.pipe';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { ProductsModule } from './products/products.module';
import { UtilityModule } from './utility.module';
import { PostComponent } from './post/post.component';
import { HookComponent } from './hook/hook.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { TodoComponent } from './todo/todo.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { RapidassignmentComponent } from './rapidassignment/rapidassignment.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { HeadersInterceptorService } from './headers-interceptor.service';
import { Service1Service } from 'src/Services/service1.service';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GifComponent } from './gif/gif.component';
import { NgxPaginationModule } from 'ngx-pagination';


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
    Comp4Component,
    User1compComponent,
    UserpipePipe,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    PostComponent,
    HookComponent,
    PostdetailsComponent,
    TodoComponent,
    RapidapiComponent,
    RapidassignmentComponent,
    FirebaseComponent,
    RandomuserComponent,
    WikipediaComponent,
    RxjsComponent,
    GifComponent,
    //ProductComponent,
    // LaptopComponent,
    // TvComponent,
    // WashingmachineComponent,
    // TabletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsModule,
    UtilityModule,
    NgxPaginationModule,
  ],
  providers: [Service1Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptorService,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /**
   *
   */
  constructor() {
    console.log('App Module Constructor called.');
    
    
  }
}
