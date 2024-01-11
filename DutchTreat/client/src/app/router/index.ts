import { RouterModule } from "@angular/router";
import { CheckoutPage } from "../pages/checkout.component";
import { ShopPage } from "../pages/shopPage.component";



const routes = [
    { path: "", component: ShopPage },
    { path: "checkout", component: CheckoutPage }

];

const router = RouterModule.forRoot(routes,
    {
        useHash: false
    });

export default router;