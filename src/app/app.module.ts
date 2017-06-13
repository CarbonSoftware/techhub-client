import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchPanelComponent } from './products/search-panel/search-panel.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { AdComponent } from './ad/ad.component';
import {ProductsService} from "./shared/products.service";
import { PromoComponent } from './header/promo/promo.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'buy', component: ProductsComponent },
  { path: 'buy/product/:id', component: ProductDetailsComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    AuthenticationComponent,
    ProductsComponent,
    ProductComponent,
    AdComponent,
    PromoComponent,
    ProductDetailsComponent,
    DropdownDirective,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
