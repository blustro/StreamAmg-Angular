import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fighters-img',
  templateUrl: './fighters-img.component.html',
  styleUrls: ['./fighters-img.component.scss']
})
export class FightersImgComponent implements OnInit {

  fightersImages: any=[];
  constructor(private data: DataService) {
      this.data.getFightersImages().subscribe( data => {
      this.fightersImages = data;
    })
  }
  ngOnInit(): void {
  }

}
