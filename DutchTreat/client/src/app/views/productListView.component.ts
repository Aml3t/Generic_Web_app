import { Component, OnInit } from "@angular/core";
import { Store } from "../services/store.service";

@Component({
    selector: "product-list",
    templateUrl: "productListView.component.html"
})
export default class ProductListView implements OnInit {


    constructor(public store: Store) {

    }
    ngOnInit(): void {
        this.store.loadProducts()
            .subscribe(() => {
                // do something
            });  // <- Kicks Off the operation
    }
}