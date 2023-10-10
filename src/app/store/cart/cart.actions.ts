import { createAction, props } from "@ngrx/store";
import { CartItem } from "src/app/components/cart/cart-item.model";

// export const setCount = createAction('[Counter] Set Count', props<{ count: number }>());


export const addToCart = createAction('[Cart] Add to Cart', props<{item: CartItem}>());