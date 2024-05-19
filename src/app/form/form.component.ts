import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() orderAdded = new EventEmitter<{ orderName: string; quantity: number; unitPrice: number }>();
  @ViewChild('orderForm') orderForm!: NgForm;

  addOrder(orderForm: any) {
      this.orderAdded.emit(orderForm);
      this.resetForm();
  }
  resetForm() {
    this.orderForm.resetForm();
  }
}
