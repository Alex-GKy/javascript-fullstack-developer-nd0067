import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<Product>(this.jsonURL);
  }

  sendOrder(products: Product[]): void {
    //if we had a backend, we'd do something like:
    //this.http.post(this.jsonURL, products);

    console.log('An order was submitted');
    products.forEach((item) => {
      console.log(`${item.id} ${item.name} ${item.price}`);
    });
  }
}
