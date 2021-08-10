import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fighters-bg',
  templateUrl: './fighters-bg.component.html',
  styleUrls: ['./fighters-bg.component.scss']
})
export class FightersBgComponent implements OnInit {

  fightersBg: any=[];
  constructor(private data: DataService) {
      this.data.getFightersBg().subscribe( data => {
      this.fightersBg = data;
    })
  }
  ngOnInit(): void {
  }

}
