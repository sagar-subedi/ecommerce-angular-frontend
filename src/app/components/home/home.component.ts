import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product-detail/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  products: Product[] = []

  constructor(private productService: ProductService){
    
  }

  ngOnInit(): void {
    //gets all the products -> assigns it to product array -> 
    this.productService.getAllProducts().subscribe(
      (data)=>{
        this.products = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
