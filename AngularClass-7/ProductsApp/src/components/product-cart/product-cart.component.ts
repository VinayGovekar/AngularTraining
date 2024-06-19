import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent implements OnInit {
 productCartList:product[] =[]

constructor(private productCartService:ProductCartService){}

 getData():void{
  this.productCartService.getProducts().subscribe((data:any)=>{
    this.productCartList=data
  })

 }
 ngOnInit(): void {
   this.getData()

   this.productCartService.getProductChanged$().subscribe((data:any)=>{this.getData()})
 }

 removeProductFromCart(id:string):void{
  this.productCartService.removeProductFromCart(id).subscribe((data)=>{
    this.getData()
  });
 }


 clearCart():void{
    for(let i=0;i<this.productCartList.length;i++){
      this.removeProductFromCart(this.productCartList[i].id)
    }
 }
}
