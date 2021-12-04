import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainHeaderComponent } from './core/header/main-header/main-header.component';
import { PrimaryButtonComponent } from './features/inputs/primary-button/primary-button.component';
import { BasicSliderComponent } from './shared/basic-slider/basic-slider.component';
import { HomeComponent } from './pages/home/home.component';
import { MovingInPathComponent } from './features/animation/moving-in-path/moving-in-path.component';
import { RecipesListingComponent } from './features/recipes/recipes-listing/recipes-listing.component';
import { RecipeItemComponent } from './features/recipes/recipes-item/recipe-item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RecipesComponent } from './pages/recipes/recipes-listing-by-filter/recipes.component';
import { RecipesListingFilterComponent } from './features/recipes/recipes-listing-filter/recipes-listing-filter.component';
import { RecipeDetailsPageComponent } from './pages/recipes/recipe-details/recipe-details-page.component';
import { RecipeDetailsComponent } from './features/recipes/recipe-details/recipe-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { RecipeSearchComponent } from './features/recipes/recipe-search/recipe-search.component';
import { RecipesSearchResultComponent } from './pages/recipes/recipes-search-result/recipes-search-result.component';



@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PrimaryButtonComponent,
    BasicSliderComponent,
    HomeComponent,
    MovingInPathComponent,
    RecipesListingComponent,
    RecipeItemComponent,
    PageNotFoundComponent,
    RecipesComponent,
    RecipesListingFilterComponent,
    RecipeDetailsComponent,
    RecipeDetailsPageComponent,
    SignUpComponent,
    RecipeSearchComponent,
    RecipesSearchResultComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    NgbModule,
    HttpClientModule
  ], 
  // entryComponents: [NgbModal, NgbActiveModal,],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
