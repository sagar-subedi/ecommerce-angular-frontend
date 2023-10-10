import { CartItem } from "src/app/components/cart/cart-item.model";
import {on, createReducer } from '@ngrx/store';
import { addToCart } from "./cart.actions";


export interface CartState {
    cartItems: CartItem[]
}

export const  initialCartState : CartState = {
    cartItems: []
};


export const cartReducer = createReducer(
    initialCartState,
    on(addToCart,
    (state,{item})=> 
    {
    
        const cartItems: CartItem[] = [...state.cartItems, item];
        console.log(state.cartItems);
        return {cartItems};
    })
)