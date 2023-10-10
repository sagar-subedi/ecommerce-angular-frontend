import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { Order } from './order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

constructor(private orderService: OrderService){
  this.orderService = orderService;

}
  ngOnInit(): void {
      this.orderService.getAllOrders().subscribe((data)=>{
        this.orders = data;
        console.log(this.orders);
      });
  }

}
