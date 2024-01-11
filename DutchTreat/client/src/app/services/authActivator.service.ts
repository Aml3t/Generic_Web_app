import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "./store.service";

@Injectable()
export class AuthActivator implements CanActivate {


    constructor(private store: Store) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (this.store.loginRequired) {
            return false;
        }
        else {
            return true;
        }

    }

}