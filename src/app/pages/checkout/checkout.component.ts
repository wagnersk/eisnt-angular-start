import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProgressiveDiscountPipe } from "../../pipes/discount.pipe";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, ProgressiveDiscountPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  private cart = inject(CartService);
  private router = inject(Router);

  items = this.cart.cartItems();
  total = this.cart.total;

  model = {
    nome: '',
    email: '',
    endereco: ''
  };

submit(form: NgForm): void {
  if (form.invalid) {
    form.control.markAllAsTouched();
    return;
  }

  const produtosDetalhesArray = this.cart.cartItems().map(item => `${item.nome} x ${item.quantidade}`)

  const produtosDetalhesStr = produtosDetalhesArray.join(', ');

  alert(`Pedido realizado com sucesso!

    Cliente:
    Nome: ${this.model.nome}
    Email: ${this.model.email}
    Endereço: ${this.model.endereco}

    Produtos:
    ${produtosDetalhesStr}

    Total: ${this.total()} €`);

  this.cart.clear();
   this.router.navigate(['/']);
}

  isInvalid(field: any): boolean {
    return field?.invalid && field?.touched;
  }
}
