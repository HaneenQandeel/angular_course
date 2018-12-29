import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from '../app/blog/blog.component';
import{AboutComponent} from '../app/about/about.component';
import {HomeComponent} from '../app/home/home.component';
import{ContactUsComponent} from '../app/contact-us/contact-us.component';


const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home' ,component:HomeComponent},
  {path:'about' ,component:AboutComponent},
  {path:'blog' ,component:BlogComponent},
  {path:'contact-us' ,component:ContactUsComponent}

  
  // {path:'contact-us' ,component:ContactUsComponent},
  // {path:'news/id:',component:NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
