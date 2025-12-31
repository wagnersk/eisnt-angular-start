import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnChanges {

  @Input({ required: true }) item!: Product;

  @Output() eventAddProduct = new EventEmitter<Product>();

  hasItems = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.hasItems = this.item.quantidade > 0;
    }
  }

  addToCart() {
    this.eventAddProduct.emit(this.item);
  }
}
