import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnInit {
  button: any=[];
  constructor(private data: DataService) {
      this.data.getButton().subscribe( data => {
      this.button = data;
    })
  }

  ngOnInit(): void {
  }

}
