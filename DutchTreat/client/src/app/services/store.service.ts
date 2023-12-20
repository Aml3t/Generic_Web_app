import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class Store {

    constructor(private http: HttpClient) {

    }

    public products = [];

//    {
//    title: "Van Gogh Mug",
//        price: "19.99"
//},
//{
//    title: "Van Gosh Poster",
//        price: "29.99"
//}
}