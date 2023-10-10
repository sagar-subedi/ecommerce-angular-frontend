import { Product } from "../product/product-detail/product.model";

export interface OrderItem{
    product: Product,
    quantity: number
}