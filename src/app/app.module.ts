import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";

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
import { UserComponent } from './user/user.component';
import {UserService} from "./shared/user.service";
import { ArticleComponent } from './news/article/article.component';
import { CompareComponent } from './products/compare/compare.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthService} from "./auth-service.service";
import {AuthGuard} from "./user/auth-gaurd.service";

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
    NewsComponent,
    UserComponent,
    ArticleComponent,
    CompareComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsService, UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
