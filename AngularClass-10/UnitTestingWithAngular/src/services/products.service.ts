import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

getData(){
  return of({id:0,name:"p1"})
}

  showData(){
    let title = "Testing"
    console.log(title);
  }

  addData(){
    console.log("adding data");
    
  }
}
