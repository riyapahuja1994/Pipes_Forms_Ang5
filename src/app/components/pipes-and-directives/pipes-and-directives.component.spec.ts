import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAndDirectivesComponent } from './pipes-and-directives.component';

describe('PipesAndDirectivesComponent', () => {
  let component: PipesAndDirectivesComponent;
  let fixture: ComponentFixture<PipesAndDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesAndDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesAndDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
