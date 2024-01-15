import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "../services/store.service";
import { LoginRequest } from "../shared/LoginResults";
import { error } from "console";

@Component({
    selector: "login-page",
    templateUrl: "loginPage.component.html"
})

export class LoginPage {
    constructor(private store: Store, private router: Router) { } 

    public creds: LoginRequest = {
        username: "",
        password: ""
    }

    onLogin() {
        this.store.login(this.creds)
            .subscribe(() => {
                //Successfully logged in
                if (this.store.order.items.length > 0) {
                    this.router.navigate(["checkout"]);
                } else {
                    this.router.navigate([""]);
                }
            }, error => {
                console.log(error)
            });
    }

}