import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Recipe from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-search-result',
  templateUrl: './recipes-search-result.component.html',
  styleUrls: ['./recipes-search-result.component.scss']
})
export class RecipesSearchResultComponent implements OnInit {
  recipes: Recipe[] = [];//this.recipeService.searchResult;
  searchText: string;
  public href: string = "";
  searchTextSubscription:Subscription;

  constructor(private recipeService: RecipeService ,private router: Router) { 
    this.recipes = this.recipeService.searchResult;
    this.searchTextSubscription = recipeService.searchResultChange.subscribe(searchResultChange => this.recipes = searchResultChange);
  }
  ngOnInit() {
    // console.log(this.route.params.subscribe(params => {
    //   this.recipes= params['recipes']
    // }));
    this.href = this.router.url;
    console.log(this.router.url);
    // this.recipes= this.recipeService.searchResult;
  }
   ngOnDestroy() {
      //prevent memory leak when component destroyed
     this.searchTextSubscription.unsubscribe();
    }
  // getRecipeBySearch(searchText: string) {
  //   console.log({ searchText });
  //   this.recipes = this.recipeService.searchForRecipes(searchText);
  //   console.log(this.recipes);
  // }
}
