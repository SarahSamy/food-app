import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import data from '../../../data/recipes-listing-filter';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
@Component({
  selector: 'app-recipes-listing-filter',
  templateUrl: './recipes-listing-filter.component.html',
  styleUrls: ['./recipes-listing-filter.component.scss']
})
export class RecipesListingFilterComponent implements OnInit {
  listingData: any[] = data;
  opened = false;
  @Output() openFilter = new EventEmitter<string>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  openList(itemCat: string) {
    this.openFilter.emit(itemCat);
    console.log(itemCat);
    this.recipeService.selectedCategory = itemCat;
    // console.log(itemsByCat);
    // this.recipeService.data = itemsByCat;
    // this.opened = true;

  }
  toggle(index) {
    const currentItem = this.listingData[index];
    this.listingData.forEach(i => i.open = false);
    currentItem.open = !currentItem.open;

  }
}
