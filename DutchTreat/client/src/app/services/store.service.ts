import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Product } from "../shared/Product";
import { Observable } from "rxjs";
import { Order, OrderItem } from "../shared/Order";

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
            }));
    }

    addToOrder(product: Product) {


        const item = new OrderItem();
        item.productId = product.id;
        item.productTitle = product.title;
        item.productArtId = product.artId;
        item.productArtist = product.artist;
        item.productCategory = product.category;
        item.productSize = product.size;
        item.unitPrice = product.price;
        item.quantity = 1;


        this.order.items.push(item);
    }

}