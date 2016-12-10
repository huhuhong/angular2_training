import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/services';

@Component({
  selector: 'page-products-1',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})

export class PageProductsComponent implements OnInit {

  constructor(private http: Http, private productService: ProductService) {}
  public products: Product[];

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(result => {
                    console.log(result);
                    this.products = result;
                }, error => {
                    console.log(error);
                });
  }
}

