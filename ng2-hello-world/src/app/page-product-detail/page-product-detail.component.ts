import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/services';

@Component({
  selector: 'page-product-detail',
  templateUrl: './page-product-detail.component.html',
  styleUrls: ['./page-product-detail.component.css']
})

export class PageProductDetailComponent implements OnInit {

  constructor(
    private _http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {

  }

  public product;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params['id'])
        .subscribe((result) => {
          this.product = result;
          console.log('Product found : ' + this.product.name);
        }, error => {
          console.log(error);
        });
    });
  }

}

