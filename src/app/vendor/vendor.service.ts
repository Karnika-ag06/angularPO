import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }
  
  url="http://localhost:1111/PurchaseOrderFrontEnd/viewAllProducts";

  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.url);
  }
}
