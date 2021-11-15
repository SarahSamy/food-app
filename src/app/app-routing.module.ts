import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RecipesComponent } from './pages/recipes/recipes-listing-by-filter/recipes.component';
import { RecipeDetailsPageComponent } from './pages/recipes/recipe-details/recipe-details-page.component';
import { RecipeSearchComponent } from './features/recipes/recipe-search/recipe-search.component';
import { RecipesSearchResultComponent } from './pages/recipes/recipes-search-result/recipes-search-result.component';
import Recipe from './model/recipe'
let recipes: Recipe[] = [];
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe/:id/details', component: RecipeDetailsPageComponent },
  { path: 'recipe-search-result', component: RecipesSearchResultComponent,data:recipes },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
