import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    AuthenticationComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
