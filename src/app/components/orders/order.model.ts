import { OrderItem } from "./orderItem.model";


export interface Order {
    id?: string; 
    customerName: string;
    orderDate?: Date;
    shippingAddress: string; 
    totalAmount: number; 
    orderItems: OrderItem[];
    orderStatus?: OrderStatus; 
  }
  
  
  enum OrderStatus {
    Processing = 'Processing',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Canceled = 'Canceled',
  }
  