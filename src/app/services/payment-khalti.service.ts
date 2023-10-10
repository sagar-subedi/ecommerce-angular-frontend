import { Injectable } from '@angular/core';
import { KhaltiPaymentRequest } from '../components/cart/khalti-payload.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { KhaltiResponse } from '../components/cart/khalti-response.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentKhaltiService {

  baseUrl: string = "http://localhost:8081/api/payment/";


  constructor(private httpClient: HttpClient, private router: Router) { }

  initiatePayment(khaltiRequest: KhaltiPaymentRequest): void {
    this.httpClient.post<KhaltiResponse>(this.baseUrl, khaltiRequest, {responseType: "json"}).subscribe((response:KhaltiResponse)=>{
      console.log(response.payment_url);
      window.location.href = response.payment_url;
    })
  }
}
