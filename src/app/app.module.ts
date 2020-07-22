import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './core/header/main-header/main-header.component';
import { PrimaryButtonComponent } from './features/inputs/primary-button/primary-button.component';
import { BasicSliderComponent } from './shared/basic-slider/basic-slider.component';
import { HomeComponent } from './features/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PrimaryButtonComponent,
    BasicSliderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
