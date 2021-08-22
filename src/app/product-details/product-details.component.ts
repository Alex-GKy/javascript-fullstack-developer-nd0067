import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  id: number = 0;
  item: any = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this.dataService.getProducts().subscribe((products) => {
      this.item = products.filter((product: any) => {
        return product.id === this.id;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
