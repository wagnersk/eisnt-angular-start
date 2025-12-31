import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class APIService {

   produtos: any[] = [
    { id: 1, nome: "Cão", preco: 79, nomeImagem: "Produto_01.jpg" },
    { id: 2, nome: "Dinossauro", preco: 39, nomeImagem: "Produto_02.jpg" },
    { id: 3, nome: "Iguana", preco: 49, nomeImagem: "Produto_03.jpg" },
    { id: 4, nome: "Pássaro", preco: 89, nomeImagem: "Produto_04.jpg" },
    { id: 5, nome: "Tigre", preco: 79, nomeImagem: "Produto_05.jpg" },
    { id: 6, nome: "Gato", preco: 19, nomeImagem: "Produto_06.jpg" },
    { id: 7, nome: "Leão", preco: 29, nomeImagem: "Produto_07.jpg" },
    { id: 8, nome: "Coruja", preco: 49, nomeImagem: "Produto_08.jpg" },
    { id: 9, nome: "Gato 2", preco: 79, nomeImagem: "Produto_09.jpg" },
    { id: 10, nome: "Veado", preco: 99, nomeImagem: "Produto_10.jpg" },
    { id: 11, nome: "Elefante", preco: 119, nomeImagem: "Produto_11.jpg" },
    { id: 12, nome: "Cão 2", preco: 109, nomeImagem: "Produto_12.jpg" }
  ];

   carrinhos: any[] = [
    { id: 3, nome: "Iguana", preco: 49, nomeImagem: "Produto_03.jpg" },
    { id: 3, nome: "Iguana", preco: 49, nomeImagem: "Produto_03.jpg" },
    { id: 9, nome: "Gato 2", preco: 79, nomeImagem: "Produto_09.jpg" },
    { id: 10, nome: "Veado", preco: 99, nomeImagem: "Produto_10.jpg" }
  ];

   apiUrl = 'http://localhost:3000';
   useMockApi = false;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.useMockApi ? of(this.produtos) : this.http.get<Product[]>(`${this.apiUrl}/produtos`);
  }

  getProductById(id: number): Observable<Product | undefined> {
    if (this.useMockApi) {
      const produto = this.produtos.find(p => p.id === id);
      return of(produto);
    }
    return this.http.get<Product>(`${this.apiUrl}/produtos/${id}`);
  }

  getCartFromApi(): Observable<Product[]> {
    return this.useMockApi ? of(this.carrinhos) : this.http.get<Product[]>(`${this.apiUrl}/carrinho`);
  }

  addProduct(product: Product): Observable<Product> {
    if (this.useMockApi) {
      return of(product);
    }
    return this.http.post<Product>(`${this.apiUrl}/carrinho`, product);
  }

  deleteProduct(id: number): Observable<void> {
    if (this.useMockApi) {
      return of(void 0);
    }
    return this.http.delete<void>(`${this.apiUrl}/carrinho/${id}`);
  }

  clearCart(): Observable<void> {
    if (this.useMockApi) {
      return of(void 0);
    }
    return this.http.delete<void>(`${this.apiUrl}/carrinho`);
  }
}
