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

  closeOtherFilters(index: number) {
    this.listingData
      .filter((item, i) => i !== index)
      .forEach(item => item.open = false);
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
    currentItem.open = !currentItem.open;
    this.closeOtherFilters(index);
  }
}
