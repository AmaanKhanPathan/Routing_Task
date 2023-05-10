import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //we have make a api call
  productArray : Array<Iproducts> = [
    {
      pname : "Samsung31",
      pid : 1,
      pstatus : "In-Progress"
    },
    {
      pname : "Samsung 70 TV",
      pid : 2,
      pstatus : "Dispatched"
    },
    {
      pname : "Iphone",
      pid : 3,
      pstatus : "Delivered"
    },
  ]
  constructor(private _snackBar : SnackbarService) { }

  getAllProducts(){
    return this.productArray;
  }

  getSingleProduct(id : number){
    return this.productArray.find(prod => prod.pid === id)
  }

  updateProduct(pObj : Iproducts){
    this.productArray.forEach(prod => {
      if(prod.pid === pObj.pid){
        prod.pname = pObj.pname;
        prod.pstatus = pObj.pstatus;
        this._snackBar.openSnackbar(`${prod.pname} is Successfully Updated`)


      }
      
    })

  }
}
