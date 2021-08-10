import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerImage: any=[];
  menuItems: any=[];
  showMenu = false;

  constructor(private data: DataService) {
    this.data.getHeaderImage().subscribe( data => {
      this.headerImage = data;
    })

    this.data.getMenuItems().subscribe( data => {
      this.menuItems = data;
    })
  }

  ngOnInit(): void {  
  }
  
  openMenu() {
    this.showMenu = true;
    document.getElementById('menuItems')?.classList.add('open');
    document.getElementById('overlay')?.classList.add('open');
  }
  closeMenu() {
    this.showMenu = false;
    document.getElementById('menuItems')?.classList.remove('open');
    document.getElementById('overlay')?.classList.remove('open');
  }

}
