export interface CustomerInfo {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface AmountBreakdown {
    label: string;
    amount: number;
  }
  
  export interface ProductDetail {
    identity: string;
    name: string;
    total_price: number;
    quantity: number;
    unit_price: number;
  }
  
  export interface KhaltiPaymentRequest {
    return_url: string;
    website_url: string;
    amount: number;
    purchase_order_id: string;
    purchase_order_name: string;
    customer_info: CustomerInfo;
    amount_breakdown: AmountBreakdown[];
    product_details: ProductDetail[];
  }