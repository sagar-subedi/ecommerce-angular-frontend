import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";

// Create a feature selector for the cart state
const selectCartState = createFeatureSelector<CartState>('cart');

// Create a selector to get the cart items
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.cartItems
);