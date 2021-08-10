import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightersBgComponent } from './fighters-bg.component';

describe('FightersBgComponent', () => {
  let component: FightersBgComponent;
  let fixture: ComponentFixture<FightersBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightersBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
