import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {
  @Output() searchForRecipes = new EventEmitter<string>();
  searchText: string;
  constructor() { }
  
  ngOnInit() {
  }
  recipesSearch(value: string) {
    this.searchForRecipes.emit(value);
  }
}
