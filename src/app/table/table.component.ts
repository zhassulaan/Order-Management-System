import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from '../header/header.component';
import { Order } from '../order.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, FormComponent, HeaderComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  counter = 2
  orders: Order[] = [
    { id: 1, orderName: 'Order 1', quantity: 10, unitPrice: 15 },
    { id: 2, orderName: 'Order 2', quantity: 5, unitPrice: 20 },
  ];
  
  addOrder(order: { orderName: string; quantity: number; unitPrice: number }) {
    this.counter++;
    this.orders.push({ ...order, id: this.counter });
  }
  deleteOrder(index: number) {
    this.orders = this.orders.filter(order => order.id !== index);
  }
}
