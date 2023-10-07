import { Product } from "../product/product-detail/product.model"

export interface CartItem {
    product: Product
    quantity: number,
    isSelected: boolean
}