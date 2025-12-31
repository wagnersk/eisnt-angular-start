import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart = inject(CartService);

  items = this.cart.cartItems;
  total = this.cart.total;
  totalItems = this.cart.totalItems;

  addQuantity(item: Product) {
    this.cart.add(item);
  }

  removeQuantity(item: Product) {
    this.cart.decrease(item.id);
  }

  removeFromCart(itemId: number) {
    this.cart.remove(itemId);
  }

  clearCart() {
    this.cart.clear();
  }
}
