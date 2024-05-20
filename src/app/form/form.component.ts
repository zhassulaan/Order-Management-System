import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() orderAdded = new EventEmitter<{ orderName: string; quantity: number; unitPrice: number }>();
  @ViewChild('orderForm') orderForm!: NgForm;

  addOrder() {
    if (this.orderForm.valid) {
      this.orderAdded.emit(this.orderForm.value);
      this.resetForm();
    }
  }
  resetForm() {
    this.orderForm.resetForm();
  }
}
