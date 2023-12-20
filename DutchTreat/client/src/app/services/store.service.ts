import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()

export class Store {

    constructor(private http: HttpClient) {

    }

    public products = [];

    loadProducts() {
        return this.http.get("/api/products")
            .pipe(map(data => {
                this.products = data;
                return;
            } ));
    }
//    {
//    title: "Van Gogh Mug",
//        price: "19.99"
//},
//{
//    title: "Van Gosh Poster",
//        price: "29.99"
//}
}