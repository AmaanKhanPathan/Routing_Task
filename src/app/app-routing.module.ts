import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './shared/components/user/user.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UsersingleComponent } from './shared/components/user/usersingle/usersingle.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';

const routes: Routes = [
  {    path : '', component : DashboardComponent }, //localhost:4200/home  
  {    path : 'user', component : UserComponent  },     //localhost:4200/user  
  {    path : 'user/:userId', component : UsersingleComponent  },     //localhost:4200/user  
  {    path : 'products', component : ProductsComponent}, //localhost:4200/products
  {    path : 'products/:productId', component : ProductComponent}, //localhost:4200/products
  {    path : 'products/:productsId/edit', component : EditProductComponent}
  // {    path : '**', redirectTo : 'pagenotfound'},    // wildcard route
  // {    path : 'pagenotfound', component : PageNotFoundComponent}, //localhost:4200/page-not-found
  
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
