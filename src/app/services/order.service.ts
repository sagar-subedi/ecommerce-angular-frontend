import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutPayload } from '../components/cart/checkout-payload.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = "http://localhost:8081/api/orders"

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllOrders(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  createOrder(orderDetails: CheckoutPayload): void {
    this.httpClient.post<CheckoutPayload>(this.baseUrl+"/create", orderDetails, {responseType: "text" as "json"}).subscribe(()=>{
      this.router.navigate(['/orders']);
    })
  }


}
