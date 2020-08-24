import { Component, OnInit, Input } from '@angular/core';
import Recipe from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-listing',
  templateUrl: './recipes-listing.component.html',
  styleUrls: ['./recipes-listing.component.scss']
})
export class RecipesListingComponent implements OnInit {
  @Input() recipes: Recipe[];
  // = this.recipeService.selectedCategoryRecipes;
  constructor(private recipeService: RecipeService) {
    // https://github.com/EvanHahn/HumanizeDuration.js
    this.recipes = this.recipeService.getAll();
  }

  ngOnInit() {
  }

}
