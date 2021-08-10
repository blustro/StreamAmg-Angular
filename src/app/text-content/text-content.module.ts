import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FightersHeadlineComponent } from '../fighters-headline/fighters-headline.component';
import { LocationSloganComponent } from '../location-slogan/location-slogan.component';
import { CategoryComponent } from '../category/category.component';
import { DateLocationComponent } from '../date-location/date-location.component';

@NgModule({
  declarations: [FightersHeadlineComponent, LocationSloganComponent, CategoryComponent, DateLocationComponent],
  imports: [
    CommonModule
  ]
})
export class TextContentModule { }
