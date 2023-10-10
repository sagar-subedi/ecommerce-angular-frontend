import { Component } from '@angular/core';
import { Product } from './product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { decrement, increment, setCount } from 'src/app/store/counter.actions';
// import { countSelector } from 'src/app/store/counter.selectors';
import { Observable, of } from 'rxjs';
import { CounterState, counterReducer } from './../../../store/counter.reducer';
import { selectSomeData } from 'src/app/store/counter.selectors';
import { StateService } from './../../../services/state.service';
import { CartItem } from './../../cart/cart-item.model';
import { addToCart } from 'src/app/store/cart/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;
  count = this.store.select('count');
  
  constructor(
    private store: Store<{count: number, cart: CartItem[]}>,
    private stateService: StateService,
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
    
    console.log(this.count);
   
    // Retrieve the product ID from the route parameters
     const productId: string = this.route.snapshot.paramMap.get('id') ?? '';

    // Fetch the product details using your product service (replace with your actual service method)
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(){
    this.store.dispatch(increment());
    this.stateService.increment();
  }
  increaseCount(){
    this.store.dispatch(increment());
    const cartItem: CartItem = {
      product: this.product,
      quantity: 2,
      isSelected: false
    }
    this.store.dispatch(addToCart({item: cartItem}));
  }

  decrement(){
    this.store.dispatch(decrement());
    
  }
}
