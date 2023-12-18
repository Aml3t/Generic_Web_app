import { Component } from "@angular/core";

@Component({
    selector: "product-list",
    templateUrl: "productListView.component.html"
})
export default class ProductListView {
    public products = [{
        title: "Van Gogh Mug",
        price: "19.99"
    },
    {
        title: "Van Gosh Poster",
        price: "29.99"
    }];
}