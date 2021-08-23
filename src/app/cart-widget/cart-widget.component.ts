import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {

  @Input() amountItems = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
