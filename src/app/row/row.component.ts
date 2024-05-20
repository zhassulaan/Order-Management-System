import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Order } from '../order.model';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [CommonModule, MatTableModule,],
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {
  @Input() order!: Order;
  @Output() deleteOrder = new EventEmitter<number>();

  onDeleteOrder() {
    this.deleteOrder.emit(this.order.id);
  }
}
