import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import ProductListView from './views/productListView.component';
import { Store } from './services/store.service';

@NgModule({
    declarations: [
        AppComponent,
        ProductListView
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        Store,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
