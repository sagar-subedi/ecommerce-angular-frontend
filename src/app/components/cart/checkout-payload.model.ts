import { OrderItem } from "../orders/orderItem.model";

export interface CheckoutPayload {
    totalAmount: number,
    // totalItems: number,
    shippingAddress: string,
    customerName: string,
    userId: number,
    orderItems: OrderItem[]



}