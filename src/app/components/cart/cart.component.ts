import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import {CheckoutPayload} from './checkout-payload.model';
import { OrderSummary } from './order-summary.model';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderItem } from '../orders/orderItem.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItems } from 'src/app/store/cart/cart.selectors';
import { KhaltiPaymentRequest } from './khalti-payload.model';
import { PaymentKhaltiService } from 'src/app/services/payment-khalti.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; 
  orderItems: OrderItem[] = []
  shippingAddress: string = "";
  recipientName: string = "";
  recipientEmail: string = "";
  recipeintPhone: number = 9806604253;
  orderSummary: OrderSummary = {
    totalAmount: 0,
    totalItems: 0,
    discount: 0,
    shippingFee: 0
}; 
cartItems$: Observable<CartItem[]>;

constructor(private productService: ProductService, private orderService: OrderService,
  private paymentKhaltiService: PaymentKhaltiService,
  private store: Store<{cart: CartItem[]}>
  ){
    this.cartItems$ = this.store.select(selectCartItems);

  // productService.getAllProducts().subscribe((data)=>
  //   data.forEach(
  //     (item)=>this.cartItems.push({product:item, quantity:1, isSelected:false})))
  
 

   // Replace 'CartItem' with your cart item type

 
     
}


ngOnInit(): void {
  
this.store.select('cart').subscribe((data)=>{
  this.cartItems = data;
  console.log(data);
}
)
}

handleCheckout(): void {
  this.cartItems.forEach((cart: CartItem) => {
    const orderItem: OrderItem = {
      product: cart.product,
      quantity: cart.quantity,
    }
    this.orderItems.push(orderItem);
  })
  //calls api to add the current order
  let checkoutPayload: CheckoutPayload = {
    totalAmount: this.orderSummary.totalAmount,
    // totalItems: this.orderSummary.totalItems,
    shippingAddress: this.shippingAddress,
    customerName: this.recipientName,
    userId: 2,
    orderItems: this.orderItems
    //for each cart item with isSellected true, add a orderItem with fields same as the other two fileds of cartItem,
  };
  console.log(checkoutPayload);
  // this.orderService.createOrder(checkoutPayload);



}

handlePayment(){
  const khaltiPaymentRequest: KhaltiPaymentRequest = {
    return_url: "http://localhost:4200/orders",
    website_url: "http://localhost:4200/",
    amount: this.orderSummary.totalAmount*100,
    purchase_order_id: "test12",
    purchase_order_name: "test",
    customer_info: {
      name: this.recipientName,
      email: this.recipientEmail,
      phone: this.recipientEmail,
    },
    amount_breakdown: [
      {
        label: "Mark Price",
        amount: this.orderSummary.totalAmount*87,
      },
      {
        label: "VAT",
        amount: this.orderSummary.totalAmount*  13,
      },
    ],
    product_details: [
      {
        identity: "1234567890",
        name: "Khalti logo",
        total_price: 1300,
        quantity: 1,
        unit_price: 1300,
      },
    ],
  };

  this.paymentKhaltiService.initiatePayment(khaltiPaymentRequest);


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
