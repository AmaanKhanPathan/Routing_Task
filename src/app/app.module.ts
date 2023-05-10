import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/user/user.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersingleComponent } from './shared/components/user/usersingle/usersingle.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    UserComponent,
    NavbarComponent,
    UsersingleComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
