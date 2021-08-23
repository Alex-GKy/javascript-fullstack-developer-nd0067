import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  items: Product[] = [];
  cartVisible: boolean = true;
  amountOfItemsInCart: number = 0;

  constructor(
    private dataService: DataService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.items = data;
    });

    this.amountOfItemsInCart = this.cartService.numberOfProducts();
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
    this.router.navigateByUrl('cart');
  }

  cart(): Product[] {
    return this.cartService.cart;
  }

  clearCart(amountOfItems: number): void {
    this.cartService.clearCart();
    alert(`${amountOfItems} item(s) removed from cart!`);
  }
}
