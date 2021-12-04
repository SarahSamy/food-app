import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Recipe from '../../model/recipe';
import recipes from '../../data/recipes';
import data from '../../data/recipes-listing-filter';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private data: Recipe[] = recipes;
  private searchResult: Recipe[]=[];
  searchResultChange: Subject<Recipe[]> = new Subject<Recipe[]>();
  constructor(public router: Router) { }

  getSearchResult(): Recipe[] {
    return this.searchResult;
  }

  getAll(): Recipe[] {
    return this.data;
  }

  getById(id: number): Recipe {
    return this.data.find(recipe => recipe.id === id);
  }
  addRecipe(recipe: Recipe) {
    recipe.id = this.data.length + 1;
    this.data.push(recipe);
  }
  update(recipe: Recipe) {
    const index = this.data.findIndex(r => r.id === recipe.id);
    this.data[index] = recipe;
  }
  delete(id: number) {
    const recipe = this.data.find(r => r.id === id);
    recipe.isDeleted = true;
  }

  getByCategory(categoryId: number): Recipe[] {
    return this.data.filter(r => r.category.id === categoryId);
  }
  getByCategoryName(catName: string) {
    return recipes.filter(r => r.category.name === catName);
  }

  getMostViews(views = 3) {
    return this.data.filter(p => p.views > views);
  }
  getFilterList() {
    return data.forEach(r => r.filterList);
  }
  toggleFavorite(id: number) {
    const selectedItem = this.data.find(item => item.id === id);
    selectedItem.favorite = !selectedItem.favorite;
  }
  searchForRecipes(searchText: string) {
    const pickedKeys = ["name", "description", "ingredients"];
    const matchedRecipes = recipes.filter((recipe) => {
      for (const key of pickedKeys) {
        let SearchedString: string = Array.isArray(recipe[key]) ? recipe[key].join() : recipe[key];
        if (SearchedString.toLowerCase().includes(searchText.toLowerCase())) return true;
      }
    });
    return matchedRecipes;
  }
  showSearchResult(searchText: string){
    this.searchResult = this.searchForRecipes(searchText);
    this.searchResultChange.next(this.searchResult);
    this.goToSearchResult();
  }
  goToSearchResult() {
    this.router.navigate(['/recipe-search-result']);
  }
 
}
