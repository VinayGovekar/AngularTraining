import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../models/product';
import { FormControl } from '@angular/forms';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  productList:product[] = [];

  constructor(private productService:ProductService,private productCartService:ProductCartService){

  }
  getProductList():void{
    this.productService.getProducts().subscribe((data:any)=>{
      this.productList=data;
    });
  }
 ngOnInit(): void {
   this.getProductList()
 }


 addProduct(product:product):any{
  this.productCartService.addProductToCart(product).subscribe();
 }
}

