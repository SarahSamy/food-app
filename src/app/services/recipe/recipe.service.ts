import { Injectable } from '@angular/core';
import Recipe from 'src/app/model/recipe';
import recipes from '../../data/recipes';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  data: Recipe[] = recipes;
  constructor() { }

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

  getMostViews(views = 3) {
    return this.data.filter(p => p.views > views);
  }
}
