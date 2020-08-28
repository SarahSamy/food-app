import { Component, OnInit, Input } from '@angular/core';
import Recipe from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  toggleFavorite(id: number) {
    // event.target.addEventListenerfavorite=! event.favorite;
    this.recipeService.toggleFavorite(id);
  }
}
