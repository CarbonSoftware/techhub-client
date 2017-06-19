import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./products/product-details/product-details.component";
import {CompareComponent} from "./products/compare/compare.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {NewsComponent} from "./news/news.component";
import {ArticleComponent} from "./news/article/article.component";
import {UserComponent} from "./user/user.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./user/auth-gaurd.service";

const appRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'login', canActivateChild: [AuthGuard], component: AuthenticationComponent},
  {
    path: 'news', component: NewsComponent, children: [
    {path: 'articles/:title', component: ArticleComponent}
  ]
  },
  {path: 'users/:id/:name', component: UserComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
