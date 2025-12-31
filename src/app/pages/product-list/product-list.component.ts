import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { APIService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { ProductItemComponent } from '../../components/product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // variáveis para representar estilos dinamicos
  //do style binding
  inputPadding = 10;
  inputBorderRadius = 10;
  inputBorder = '1px solid #ccc';
  inputWidth = 150;

  apiService = inject(APIService);
  cartService = inject(CartService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  products: Product[] = [];

  min: number | null = null;
  max: number | null = null;
  query: string = '';

  appliedMin: number | null = null;
  appliedMax: number | null = null;
  appliedQuery: string = '';

  constructor() {
    this.apiService.getProducts().subscribe(products => this.products = products);

    //aqui eu inicio tudo
    this.route.queryParams.subscribe(params => {
      this.min = params['min'] ? Number(params['min']) : null;
      this.max = params['max'] ? Number(params['max']) : null;
      this.query = params['query'] ?? '';

      // Aplica os filtros ao inicializar
      this.appliedMin = this.min;
      this.appliedMax = this.max;
      this.appliedQuery = this.query;
    });
  }
/*
adicionei a propriedade quantidade , pois eu iria sugerir essa melhora
ao backend, pois não sei se fica viável repetir muitas vezes o mesmo item no carrinho.


Talvez uma tabela separada no banco de dados para armazenar os itens do carrinho
com a quantidade de cada item seria mais eficiente e uma query para juntar as duas tabelas

*/
  productsWithCart() {
    const cartItems = this.cartService.cartItems();
    return this.products.map(product => {
      const cartItem = cartItems.find(c => c.id === product.id);
      return { ...product, quantidade: cartItem?.quantidade ?? 0 };
    });
  }

  /* aqui eu aplico os filtros do query params ao meu array local */

  productsFiltered() {
    const qLower = this.appliedQuery.toLowerCase();
    return this.productsWithCart().filter(product => {
      if (this.appliedMin !== null && product.preco < this.appliedMin) return false;
      if (this.appliedMax !== null && product.preco > this.appliedMax) return false;
      if (qLower && !product.nome.toLowerCase().includes(qLower)) return false;
      return true;
    });
  }

  // Aplica filtros e atualiza query params
  applyFilters() {
    this.appliedMin = this.min;
    this.appliedMax = this.max;
    this.appliedQuery = this.query;

    this.router.navigate([], {
      queryParams: {
        min: this.min ?? null,
        max: this.max ?? null,
        query: this.query || null
      },
      queryParamsHandling: 'merge'
    });
  }

  /* Aqui eu reseto tudo  */

  clearFilters() {
    this.min = null;
    this.max = null;
    this.query = '';

    this.appliedMin = null;
    this.appliedMax = null;
    this.appliedQuery = '';

    this.router.navigate([], { queryParams: {} });
  }

  handleAddProduct(product: Product) {
    this.cartService.add(product);
  }
}
