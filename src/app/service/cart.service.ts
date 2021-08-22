import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cart: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.cart.push(product);
  }

  numberOfProducts(): number {
    return this.cart.length;
  }
}
