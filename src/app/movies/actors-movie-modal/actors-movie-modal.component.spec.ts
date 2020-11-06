import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsMovieModalComponent } from './actors-movie-modal.component';

describe('ActorsMovieModalComponent', () => {
  let component: ActorsMovieModalComponent;
  let fixture: ComponentFixture<ActorsMovieModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsMovieModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
