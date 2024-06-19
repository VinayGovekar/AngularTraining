import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string="http://localhost:3000/products";
  
  productListChanged = new Subject();

  productChanged$ = this.productListChanged.asObservable()
  constructor(private productClient: HttpClient) {}
  
  getProductChanged$():any{
    return this.productChanged$
  }
  getProducts():any{
    return this.productClient.get(this.baseUrl);
  }
  

}
