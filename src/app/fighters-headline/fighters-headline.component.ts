import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fighters-headline',
  templateUrl: './fighters-headline.component.html',
  styleUrls: ['./fighters-headline.component.scss']
})
export class FightersHeadlineComponent implements OnInit {
  fightersName: any=[];


  constructor(private data: DataService) {
    this.data.getFightersName().subscribe( data => {
    this.fightersName = data;
  })
}

  ngOnInit(): void {
  }
}
