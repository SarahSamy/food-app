import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListingFilterComponent } from './recipes-listing-filter.component';

describe('RecipesListingFilterComponent', () => {
  let component: RecipesListingFilterComponent;
  let fixture: ComponentFixture<RecipesListingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesListingFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
