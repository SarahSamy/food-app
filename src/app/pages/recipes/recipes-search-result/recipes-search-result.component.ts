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
export class RecipesSearchResultComponent {
  recipes: Recipe[] = this.recipeService.getSearchResult();
  searchText: string;
  searchTextSubscription: Subscription;
  constructor(private recipeService: RecipeService) {
    this.searchTextSubscription = recipeService.searchResultChange.subscribe(searchResultChange => {
      this.recipes = searchResultChange;
    });
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this.searchTextSubscription.unsubscribe();
  }
}
