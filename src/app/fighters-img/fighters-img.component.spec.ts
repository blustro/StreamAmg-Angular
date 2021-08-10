import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightersImgComponent } from './fighters-img.component';

describe('FightersImgComponent', () => {
  let component: FightersImgComponent;
  let fixture: ComponentFixture<FightersImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightersImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
