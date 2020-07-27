import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  data: Recipe[];
  constructor() {
    this.data = [
      {
        id: 1,
        name: 'koshari',
        description: 'Egyption tradtional food',
        createdBy: 'Sarah Refaat',
        rate: 4,
        image: '../../../assets/images/recipes/koshari1.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['2 cups of rice', '5 medium tomatos', '150g pasta', '5 medium onions', '350g lentil',],
        steps: ['jojojlkjlkjlkj', 'jkjkjkjkjkj', 'dsdsdsdsdsdsd'],
        time: { activeTime: '30m', totalTime: '1h 30m' },
        yield: 4,
        tags: [{ id: 1, name: 'hot dishes' }, { id: 5, name: 'vegiterian' }],
        comments: [{ id: 1, body: 'amazing dish', createdAt: '27/7/2020', createdBy: 'Noha', recipeId: 1 }],
        createdAt: '27/7/2020',
        favourite: false,
        views: 1,
        isDeleted: false,
      },
      {
        id: 2,
        name: 'White calzones with marinara sauce',
        description:
          'Supermarket brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check the label and choose ricotta made with as few ingredients as possible.',
        createdBy: 'Alex Williamns',
        rate: 4,
        image: '../../../assets/images/recipes/pasta.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['1 pound fresh prepared pizza dough', '6 ounces shredded mozzarella cheese',
          '3/4 cup of ricotta cheese', '1 large egg yolk', '1/2 teaspoon lemon zest', '2 finely grated garlic cloves'
          , '1/2 teaspoon kosher salt', '1/4 teaspoon black pepper', '1 large egg', '1 teaspoon dried Italian seasoning'],
        steps: ["Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn't kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.",
          "Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn't kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.",],
        time: { activeTime: '20m', totalTime: '50m' },
        yield: 4,
        tags: [{ id: 1, name: 'hot dishes' }, { id: 5, name: 'pasta' }],
        comments: [{ id: 1, body: ' delicious dish', createdAt: '25/7/2020', createdBy: 'Yara', recipeId: 2 }],
        createdAt: '24/7/2020',
        favourite: false,
        views: 1,
        isDeleted: false,
      }
    ];
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
    const i = this.data.findIndex(r => r.id === recipe.id);
    this.data[i] = recipe;
  }
  delete(id: number) {
    const i = this.data.find(r => r.id === id);
    i.isDeleted = true;

  }

  getByCategory(categoryId: number): Recipe[] {
    return this.data.filter(r => r.category.id === categoryId);
  }

  getMostViews() {
    return this.data.filter(p => p.views > 3);
  }
}
