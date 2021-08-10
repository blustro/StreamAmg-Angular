import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getHeaderImage() {
    let url="http://localhost:3000/headerImage";
    return this.httpClient.get(url);
  }

  getMenuItems() {
    let url="http://localhost:3000/menuItems";
    return this.httpClient.get(url);
  }

  getSmokeImages() {
    let url="http://localhost:3000/smokeImages";
    return this.httpClient.get(url);
  }
  getFightersName() {
    let url="http://localhost:3000/fightersName";
    return this.httpClient.get(url);
  }
  getLocationSlogan() {
    let url="http://localhost:3000/locationSlogan";
    return this.httpClient.get(url);
  }
  getCategory() {
    let url="http://localhost:3000/category";
    return this.httpClient.get(url);
  }
  getLocationDetails() {
    let url="http://localhost:3000/locationDetails";
    return this.httpClient.get(url);
  }
  getButton() {
    let url="http://localhost:3000/button";
    return this.httpClient.get(url);
  }
  getFightersBg() {
    let url="http://localhost:3000/fightersBg";
    return this.httpClient.get(url);
  }
  getFightersImages() {
    let url="http://localhost:3000/fightersImages";
    return this.httpClient.get(url);
  }
  
}
