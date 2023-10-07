import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { OrderSummary } from './order-summary.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; 
  orderSummary: OrderSummary = {
    totalAmount: 0,
    totalItems: 0,
    discount: 0,
    shippingFee: 0
}; 

constructor(private productService: ProductService){
  productService.getAllProducts().subscribe((data)=>
    data.forEach(
      (item)=>this.cartItems.push({product:item, quantity:1, isSelected:false})))
      
  
}


ngOnInit(): void {
  
    
}

  updateOrderSummary() {
    // Implement logic to calculate order summary (total items, total amount, discounts, etc.)
    // Update this.orderSummary with the calculated values
  }

  // Method to handle item selection for checkout
  handleItemSelection(event: any,item: CartItem) {
    if(event.target.checked === true){
      this.orderSummary.totalAmount += item.product.price;
      this.orderSummary.totalItems += item.quantity;
      return;
    }
    this.orderSummary.totalAmount -= item.product.price;
      this.orderSummary.totalItems -= item.quantity;
      return;
    
  }

}
