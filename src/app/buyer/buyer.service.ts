import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }
  url="http://localhost:1111/PurchaseOrderFrontEnd/viewAllProducts";

getAllProducts():Observable<any>
{
  return this.http.get(this.url);
}
getProductNameById(id:number):Observable<Product> {
  return this.http.get<Product>("http://localhost:1111/PurchaseOrderFrontEnd/getProductNameById?productId="+id);
}

raisePoForm(poArr:any,uId:number)
{
  console.log(poArr);
  return this.http.post<any>("http://localhost:1111/PurchaseOrderFrontEnd/purchaseOrder/"+uId,poArr);
}

}




