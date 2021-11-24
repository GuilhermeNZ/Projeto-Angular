import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './NAV/nav.component';
import { AppRoutingModule } from './app.routing.module';
import { bd } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, ],
  declarations: [ AppComponent, NavComponent, bd],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
