import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { APIService } from './api.service';
@Injectable({ providedIn: 'root' })
export class CartService {

 cartItems = signal<Product[]>([]);

    total = computed(() =>
    this.cartItems().reduce(
      (sum, item) => sum + item.preco * item.quantidade,
      0
    )
  );

    totalItems = computed(() =>
    this.cartItems().reduce(
      (sum, item) => sum + item.quantidade,
      0
    )
  );

  constructor(private apiService: APIService) {
    this.loadCartFromApi();
  }

  getCartItems() {
    return this.cartItems();
  }


  add(product: Product) {
    this.cartItems.update(items => {
      const found = items.find(i => i.id === product.id);
      if (found) {
        return items.map(i =>
          i.id === product.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }
      return [...items, { ...product, quantidade: 1 }];
    });
  }

  decrease(productId: number) {
    this.cartItems.update(items =>
      items
        .map(i =>
          i.id === productId
            ? { ...i, quantidade: i.quantidade - 1 }
            : i
        )
        .filter(i => i.quantidade > 0)
    );
  }

  remove(productId: number) {
    this.cartItems.update(items =>
      items.filter(i => i.id !== productId)
    );
  }

  clear() {
    this.cartItems.set([]);
  }

  private loadCartFromApi() {
    this.apiService.getCartFromApi().subscribe(products => {
      this.cartItems.set(
        products.map(p => ({ ...p, quantidade: p.quantidade ?? 1 }))
      );
    });
  }
}
