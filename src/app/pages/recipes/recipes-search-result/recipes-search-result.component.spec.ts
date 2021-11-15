import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSearchResultComponent } from './recipes-search-result.component';

describe('RecipesSearchResultComponent', () => {
  let component: RecipesSearchResultComponent;
  let fixture: ComponentFixture<RecipesSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
