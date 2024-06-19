import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  baseUrl:string="http://localhost:3000/productCart";
  
  productCartChanged = new Subject<any>();

  productChanged$ = this.productCartChanged.asObservable()
  constructor(private productCartClient: HttpClient) {}
  
  getProductChanged$():any{
    return this.productChanged$
  }
  getProducts():any{
    return this.productCartClient.get(this.baseUrl);
  }
  
  addProductToCart(product:product):any{
    return this.productCartClient.post(this.baseUrl,product).pipe(map(x=>this.productCartChanged.next(x)))
  }

  removeProductFromCart(id:string){
    return this.productCartClient.delete(this.baseUrl+"/"+id)
  }
}
