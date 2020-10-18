import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import Recipe from 'src/app/model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = this.recipeService.getAll();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  getFilterList(selectedCategory: string) {
    this.recipes = this.recipeService.getByCategoryName(selectedCategory);
  }

}
