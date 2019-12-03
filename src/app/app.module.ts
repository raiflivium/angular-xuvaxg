import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './main/main.component';
import { OtherComponent } from './other/other.component';

import { AppRoutingModule } from './app-routing.module';
import { PopulateUsersService } from './populate-users.service';


@NgModule({
  imports:      [ 
    BrowserModule,     
    AppRoutingModule,
    FormsModule 
  ],
  declarations: [ AppComponent, HelloComponent, MainComponent, OtherComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PopulateUsersService]
})
export class AppModule { }
