import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  smokeImages: any=[];

  public isScrolled = false;


  constructor(private data: DataService) {
      this.data.getSmokeImages().subscribe( data => {
      this.smokeImages = data;
    })
  }

  @HostListener('window:scroll', ['blá'])
    onWindowScroll() {
      const number = window.scrollY
      if (number > 150) {
          this.isScrolled = true;
          console.log('worked?');
          
      } else if (this.isScrolled && number < 10) {
          this.isScrolled = false;
      }
    }

  ngOnInit(): void {
    const smallScreen = window.matchMedia("(max-width: 992px)");
    const fighter1 = document.querySelector(".fighter1");
    const fighter2 = document.querySelector(".fighter2");
    const fighterBg1 = document.querySelector(".fighter-bg1");
    const fighterBg2 = document.querySelector(".fighter-bg2");

    fighter1?.addEventListener("animationend", function () {
      onScroll("fighter1");
    });

    fighter2?.addEventListener("animationend", function () {
      onScroll("fighter2");
    });

    if (smallScreen.matches) {
      fighterBg1?.addEventListener("animationend", function () {
        onScroll("fighter-bg1");
      });

      fighterBg2?.addEventListener("animationend", function () {
        onScroll("fighter-bg2");
      });
    }

    window.addEventListener("resize", () => {
      onScroll("fighter1");
      onScroll("fighter2"); 

      if (smallScreen.matches) {
        onScroll("fighter-bg1");
        onScroll("fighter-bg2");
      }
    });

    window.addEventListener("scroll", () => {
      onScroll("fighter1");
      onScroll("fighter2");

      if (smallScreen.matches) {
        onScroll("fighter-bg1");
        onScroll("fighter-bg2");
      }
    });

    const onScroll = (fighter: any) => {
      fighter = document.querySelector(`.${fighter}`);

      if (fighter.classList.contains("fighter1")) fighter.style.left = "13%";
      if (fighter.classList.contains("fighter-bg1")) fighter.style.left = "0";

      if (
        fighter.classList.contains("fighter2") ||
        fighter.classList.contains("fighter-bg2")
      ) {
        fighter.style.left = "auto";
      }
      const getPos = fighter.getBoundingClientRect();

      window.addEventListener("scroll", () => {
        let s = window.scrollY,
          d = document.body.clientHeight,
          c = window.innerHeight,

        scrollPercent = s / (d - c);

        if (
          fighter.classList.contains("fighter1") ||
          fighter.classList.contains("fighter-bg1")
        ) {
          let position = (-scrollPercent * d) / 5 + getPos.left;
          fighter.style.left = `${position}px`;
        }
        if (
          fighter.classList.contains("fighter2") ||
          fighter.classList.contains("fighter-bg2")
        ) {
          let position = (scrollPercent * d) / 5 + getPos.left;
          fighter.style.left = `${position}px`;
        }
      });
    };
  }
}
