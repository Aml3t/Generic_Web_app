import { RouterModule } from "@angular/router";
import { CheckoutPage } from "../pages/checkout.component";
import { ShopPage } from "../pages/shopPage.component";
import { LoginPage } from "../pages/loginPage.component";



const routes = [
    { path: "", component: ShopPage },
    { path: "checkout", component: CheckoutPage },
    { path: "login", component: LoginPage}

];

const router = RouterModule.forRoot(routes,{
        useHash: false
    });

export default router;