import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import Recipe from 'src/app/model/recipe';

@Component({
  selector: 'app-recipes-listing',
  templateUrl: './recipes-listing.component.html',
  styleUrls: ['./recipes-listing.component.scss'],
})
export class RecipesListingComponent implements OnInit {
  @Input() recipes: Recipe[] = [];
  constructor() {
  }

  ngOnInit() {
  }

}
