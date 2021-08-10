import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSloganComponent } from './location-slogan.component';

describe('LocationSloganComponent', () => {
  let component: LocationSloganComponent;
  let fixture: ComponentFixture<LocationSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationSloganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
