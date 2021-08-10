import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TextContentComponent } from './text-content/text-content.component';
import { FightersHeadlineComponent } from './fighters-headline/fighters-headline.component';
import { LocationSloganComponent } from './location-slogan/location-slogan.component';
import { CategoryComponent } from './category/category.component';
import { DateLocationComponent } from './date-location/date-location.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import { FightersBgComponent } from './fighters-bg/fighters-bg.component';
import { FightersImgComponent } from './fighters-img/fighters-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroBannerComponent,
    TextContentComponent,
    FightersHeadlineComponent,
    LocationSloganComponent,
    CategoryComponent,
    DateLocationComponent,
    BuyButtonComponent,
    FightersBgComponent,
    FightersImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
