import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextContentComponent } from '../text-content/text-content.component';
import { BuyButtonComponent } from '../buy-button/buy-button.component';
import { FightersBgComponent } from '../fighters-bg/fighters-bg.component';
import { FightersImgComponent } from '../fighters-img/fighters-img.component';

@NgModule({
  declarations: [
    TextContentComponent,
    BuyButtonComponent,
    FightersBgComponent,
    FightersImgComponent
  ],
  imports: [
    CommonModule
  ],
})
export class HeroBannerModule { }
