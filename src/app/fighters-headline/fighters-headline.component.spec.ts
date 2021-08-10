import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightersHeadlineComponent } from './fighters-headline.component';

describe('FightersHeadlineComponent', () => {
  let component: FightersHeadlineComponent;
  let fixture: ComponentFixture<FightersHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightersHeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
