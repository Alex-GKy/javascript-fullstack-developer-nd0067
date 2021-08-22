import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  numberOfProducts(): number {
    return this.cartService.numberOfProducts();
  }

  totalPrice(): number {
    let totalPrice: number = this.cartService.totalPrice();

    return parseFloat(totalPrice.toFixed(2));
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  cart(): Product[] {
    return this.cartService.cart;
  }

  //TODO adjust cartService to count amount of items
  //TODO remove items from cart
  //TODO change amount of items in cart
  //TODO show total price in cart
  //TODO checkout
}
