import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from '../interfaces';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductMockService {
    //private url = '/assets/products.json';
    private url = "http://shangyilim-inventory.azurewebsites.net/api/product";
    constructor(private _http: Http) { }

    getProducts() {
        return this._http
            .get(this.url)
            .map(x => x.json());
    }

    getProductById(id: string) {
        return this._http
            .get(this.url + "/" + id)
            .map(x => x.json());
    }

    getProductById1(id: string) {
        return this._http
            .get(this.url + "/" + id)
            .map(x => x.json());
    }
}