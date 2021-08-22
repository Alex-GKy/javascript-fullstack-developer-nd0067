import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,
              private router: Router) {}

  ngOnInit(): void {}

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

  navigateToCheckout() {
    this.router.navigateByUrl('checkout');
  }
}
