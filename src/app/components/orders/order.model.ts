import { CartItem } from "../cart/cart-item.model";

export interface Order {
    orderId: string; 
    customerName: string;
    orderDate: Date;
    shippingAddress: string; 
    totalAmount: number; 
    orderItems: CartItem[];
    orderStatus: OrderStatus; 
  }
  
  
  enum OrderStatus {
    Processing = 'Processing',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Canceled = 'Canceled',
  }
  