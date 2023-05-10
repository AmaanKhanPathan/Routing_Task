import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts, Ipstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId ! : number;
  selectedProduct ! : Iproducts;

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _productsService : ProductsService
    ) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['productsId'];
    this.selectedProduct = this._productsService.getSingleProduct(this.productId)!
  }

  onProductUpdate(pname : HTMLInputElement, pstatus : HTMLSelectElement){
    let obj : Iproducts = {
      pname : pname.value,
      pstatus : pstatus.value as Ipstatus,
      pid : this.productId
    }
    this._productsService.updateProduct(obj)
    this._router.navigate(['products',this.productId])

  }

}
