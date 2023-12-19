import { Component } from "@angular/core";
import { Store } from "../services/store.service";

@Component({
    selector: "product-list",
    templateUrl: "productListView.component.html"
})
export default class ProductListView {

    public products = [];

    constructor(private store: Store) {
        this.products = store.products;
    }
}