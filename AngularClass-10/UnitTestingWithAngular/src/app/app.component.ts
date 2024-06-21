import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { MyCustomDirectiveDirective } from '../directives/my-custom-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyCustomDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnitTestingWithAngular';

  users = ["Rohit","Virat","Dhoni"]


  /**
   *
   */
  constructor(private productService:ProductsService) {
    

  }

  getData(){
    this.productService.getData();
  }
  showData(){
    this.productService.showData();
  }

  addData(){
    this.productService.addData();
  }
}
