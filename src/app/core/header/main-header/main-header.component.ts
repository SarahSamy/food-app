import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import Recipe from 'src/app/model/recipe';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  recipes: Recipe[] = this.recipeService.getAll();
  @Output() searchForRecipe = new EventEmitter<string>();
  constructor(private recipeService: RecipeService, public router: Router,private route:ActivatedRoute) { }

  getRecipeBySearch(searchText: string) {
    this.recipeService.showSearchResult(searchText);
      
  }
  goToSearchResult(){
    this.router.navigate(['/recipe-search-result']);
  }
  }