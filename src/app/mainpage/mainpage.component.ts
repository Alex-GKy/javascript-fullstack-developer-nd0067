import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  items: Product[] = [];

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.items = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  cart(): Product[] {
    return this.cartService.cart;
  }
}
