import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-date-location',
  templateUrl: './date-location.component.html',
  styleUrls: ['./date-location.component.scss']
})
export class DateLocationComponent implements OnInit {

  locationDetails: any=[];
  constructor(private data: DataService) {
      this.data.getLocationDetails().subscribe( data => {
      this.locationDetails = data;
    })
  }
  ngOnInit(): void {
  }

}
