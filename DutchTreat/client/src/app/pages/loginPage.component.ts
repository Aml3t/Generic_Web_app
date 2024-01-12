import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "../services/store.service";

@Component({
    selector: "login-page",
    templateUrl: "loginPage.component.html"
})

export class LoginPage {
    constructor(private store: Store, private router: Router) { } 

}