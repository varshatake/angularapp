import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TvComponent } from './product/tv/tv.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { AuthgaurdGuard } from './AuthGuard/authguard.guard';
import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { RapidassignmentComponent } from './rapidassignment/rapidassignment.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { GifComponent } from './gif/gif.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}, // localhost:4200/login
  {path: 'home', canActivate:[AuthgaurdGuard],component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  //{path: 'product', children: [  //for single component
    // { path: '', component: ProductComponent}, // localhost:4200/product/laptop
    {path: 'product',canActivate:[AuthgaurdGuard],component:ProductComponent,children:[
      {path: 'laptop', component: LaptopComponent},
      { path: 'tv', component: TvComponent},
      {path: 'tablet', component: TabletComponent},
      {path: 'washingmachine', component: WashingmachineComponent}
    ] },
    {path:'post',component:PostComponent},
    {path:'postdetails:/id',component:PostdetailsComponent},
    {path: 'todo', component: TodoComponent},
    {path:'rapidapi',component:RapidapiComponent},
    {path:'rapidapiassignment',component:RapidassignmentComponent},
    {path:'firebaseapi',component:FirebaseComponent},
    {path:'randomuserapi',component:RandomuserComponent},
    {path:'wikipedia',component:WikipediaComponent},
    {path:'rxjs',component:RxjsComponent},
    {path:'gif',component:GifComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // { preloadingStrategy: PreloadAllModules}
  exports: [RouterModule]
})
export class AppRoutingModule { }


