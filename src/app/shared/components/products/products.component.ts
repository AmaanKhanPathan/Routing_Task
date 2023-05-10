import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsInfo: Array<Iproducts> = []
  selectedProductsid ! : number;
  constructor(private _productService: ProductsService, private _router : Router) { }

  ngOnInit(): void {
    this.productsInfo = this._productService.getAllProducts();
    this.selectedProductsid = this.productsInfo[0].pid

  }

  onProductClick(){
    this._router.navigate(['user'])
  }

}
