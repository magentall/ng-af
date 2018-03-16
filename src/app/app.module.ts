import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { A1Component } from './a1/a1.component';
import { B1Component } from './b1/b1.component';
import { C1Component } from './c1/c1.component';


@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    B1Component,
    C1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
