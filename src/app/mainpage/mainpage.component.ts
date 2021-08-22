import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  items: Product[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.items = data;
    });
  }
}
