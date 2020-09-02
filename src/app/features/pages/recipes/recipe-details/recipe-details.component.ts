import { Component, OnInit, Input } from '@angular/core';
import Recipe from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      const recipeId = Number(paramsId.id);
      this.recipe = this.recipeService.getById(recipeId);
    });
  }

  // getItemById() {
  //   this.recipeService.getById(this.recipe.id);
  // }
}
