import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-location-slogan',
  templateUrl: './location-slogan.component.html',
  styleUrls: ['./location-slogan.component.scss']
})
export class LocationSloganComponent implements OnInit {
  locationSlogan: any=[];
    constructor(private data: DataService) {
      this.data.getLocationSlogan().subscribe( data => {
      this.locationSlogan = data;
    })
  }
  ngOnInit(): void {
  }

}
