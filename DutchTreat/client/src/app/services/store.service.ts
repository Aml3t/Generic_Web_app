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

        const newItem = new OrderItem();
        newItem.id = product.id;
        newItem.productTitle = product.title;
        newItem.productArtId = product.artId;
        newItem.productArtist = product.artist;
        newItem.productCategory = product.category;
        newItem.productSize = product.size;
        newItem.unitPrice = product.price;
        newItem.quantity = 1;


        this.order.items.push(newItem);
    }

}