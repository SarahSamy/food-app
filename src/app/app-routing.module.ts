import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { PageNotFoundComponent } from './features/pages/page-not-found/page-not-found.component';
import { RecipesComponent } from './features/pages/recipes/recipes-listing-by-filter/recipes.component';
import { RecipeDetailsPageComponent } from './features/pages/recipes/recipe-details/recipe-details-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe/:id/details', component: RecipeDetailsPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
