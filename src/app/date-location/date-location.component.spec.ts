import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateLocationComponent } from './date-location.component';

describe('DateLocationComponent', () => {
  let component: DateLocationComponent;
  let fixture: ComponentFixture<DateLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
