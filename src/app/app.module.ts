import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './main/main.component';
import { OtherComponent } from './other/other.component';

import { AppRoutingModule } from './app-routing.module';
import { PopulateUsersService } from './populate-users.service';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';


@NgModule({
  imports:      [ 
    BrowserModule,     
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, HelloComponent, MainComponent, OtherComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PopulateUsersService, UserService]
})
export class AppModule { }
