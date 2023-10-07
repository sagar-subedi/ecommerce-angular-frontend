import { Component, Input } from '@angular/core';
import { Product } from '../product-detail/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product?: Product;

  constructor(private router: Router) {}

  navigateToProductDetails(productId: number): void {
    console.log("product-detal-page called");
    this.router.navigate(['/product', productId]);

  }

}
