import { Component, inject, computed, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { APIService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ArrowLeftComponent } from "../../icons/arrow-left/arrow-left.component";
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, ArrowLeftComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private apiService = inject(APIService);
  private cartService = inject(CartService);

  item?: Product;

  private subscription?: Subscription;

  quantityInCart = computed(() => {
    const cartItems = this.cartService.cartItems();
    return cartItems.find(c => c.id === this.item?.id)?.quantidade ?? 0;
  });

  ngOnInit(): void {
    // Usa switchMap para evitar múltiplas subscriptions
    this.subscription = this.route.params
      .pipe(
        switchMap(params => this.apiService.getProductById(Number(params['id'])))
      )
      .subscribe(produto => {
        this.item = produto;
      });
  }

  addToCart(): void {
    if (this.item) {
      this.cartService.add(this.item);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
