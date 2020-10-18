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
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
