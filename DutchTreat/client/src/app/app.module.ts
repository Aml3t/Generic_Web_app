import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import ProductListView from './views/productListView.component';
import { Store } from './services/store.service';
import { CartView } from './views/cartView.component';
import router from './router';
import { ShopPage } from './pages/shopPage.component';
import { CheckoutPage } from './pages/checkout.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListView,
        CartView,
        ShopPage,
        CheckoutPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        router
    ],
    providers: [
        Store,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
