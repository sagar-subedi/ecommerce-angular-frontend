import { Component } from '@angular/core';
import { Product } from './product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // Inject your product service
  ) {
    this.product = {
      id: 0,
      name: '',
      imageUrl: '', 
      price: 0,
      description: ''
    };
  }

  ngOnInit() {

   
    // Retrieve the product ID from the route parameters
     const productId: string = this.route.snapshot.paramMap.get('id') ?? '';

    // Fetch the product details using your product service (replace with your actual service method)
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }
}
