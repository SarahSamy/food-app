import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingInPathComponent } from './moving-in-path.component';

describe('MovingInPathComponent', () => {
  let component: MovingInPathComponent;
  let fixture: ComponentFixture<MovingInPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingInPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingInPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
