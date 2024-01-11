import { RouterModule } from "@angular/router";
import { CheckoutPage } from "../pages/checkout.component";
import { ShopPage } from "../pages/shopPage.component";
import { LoginPage } from "../pages/loginPage.component";
import { AuthActivator } from "../services/authActivator.service";



const routes = [
    { path: "", component: ShopPage },
    { path: "checkout", component: CheckoutPage, canActivate: [AuthActivator] },
    { path: "login", component: LoginPage}

];

const router = RouterModule.forRoot(routes,{
        useHash: false
    });

export default router;