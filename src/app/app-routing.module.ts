import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { MainComponent } from './main/main.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { 
    path:  '', 
    redirectTo:  'main', 
    pathMatch:  'full' 
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'other',
    component: OtherComponent
  }, 
  {
    path: 'user',
    component: UserDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }