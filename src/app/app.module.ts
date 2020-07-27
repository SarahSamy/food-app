import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './core/header/main-header/main-header.component';
import { PrimaryButtonComponent } from './features/inputs/primary-button/primary-button.component';
import { BasicSliderComponent } from './shared/basic-slider/basic-slider.component';
import { HomeComponent } from './features/pages/home/home.component';
import { MovingInPathComponent } from './features/animation/moving-in-path/moving-in-path.component';
import { RecipesListingComponent } from './features/recipes/recipes-listing/recipes-listing.component';
import { RecipeItemComponent } from './features/recipes/recipes-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PrimaryButtonComponent,
    BasicSliderComponent,
    HomeComponent,
    MovingInPathComponent,
    RecipesListingComponent,
    RecipeItemComponent
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
