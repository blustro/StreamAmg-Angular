import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: any=[];
  constructor(private data: DataService) {
    this.data.getCategory().subscribe( data => {
    this.category = data;
  })
}
  ngOnInit(): void {
  }

}
