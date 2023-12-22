import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Product } from "../shared/Product";
import { Observable } from "rxjs";
import { Order } from "../shared/Order";

@Injectable()

export class Store {

    constructor(private http: HttpClient) {

    }

    public products: Product[] = [];
    public order: Order = new Order();


    loadProducts(): Observable<void> {
        return this.http.get<[]>("/api/products")
            .pipe(map(data => {
                this.products = data;
                return;
            } ));
    }

}