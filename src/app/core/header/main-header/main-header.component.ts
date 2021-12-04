import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import Recipe from 'src/app/model/recipe';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  // providers: [NgbModalConfig, NgbModal]
  // entryComponents: [NgbModal, NgbModalConfig,],
})
export class MainHeaderComponent {
  recipes: Recipe[] = this.recipeService.getAll();
  @Output() searchForRecipe = new EventEmitter<string>();
  @Output() openSignUpDialog = new EventEmitter<string>();
  constructor(private recipeService: RecipeService, public router: Router, private userService:UserService) { }

  getRecipeBySearch(searchText: string) {
    this.recipeService.showSearchResult(searchText);

  }
  goToSearchResult() {
    this.router.navigate(['/recipe-search-result']);
  }
  signUp() {
    console.log("sign up clicked...");

  }
  // open(content) {
  //   this.modalService.open(content);
  // }
  openSignUp(content) {
    this.userService.showSignUpDialog(content);

  }
}