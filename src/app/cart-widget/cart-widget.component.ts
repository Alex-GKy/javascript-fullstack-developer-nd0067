import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css'],
})
export class CartWidgetComponent implements OnInit {
  @Input() amountOfItems = 0;
  @Output() clearCartEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  clearCart(amountOfItems: number): void {
    this.amountOfItems = 0; //doesn't make too much sense, but for the sake of practising...
    this.clearCartEvent.emit(amountOfItems);
  }
}
