import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrywiselistComponent } from './countrywiselist.component';

describe('CountrywiselistComponent', () => {
  let component: CountrywiselistComponent;
  let fixture: ComponentFixture<CountrywiselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrywiselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrywiselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
