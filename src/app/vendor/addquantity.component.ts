import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-addquantity',
  templateUrl: './addquantity.component.html',
  styleUrls: ['./addquantity.component.css']
})
export class AddquantityComponent implements OnInit {

  constructor(private vendorService:VendorService) { }
public productArray:Product[];
 
ngOnInit() {
this.vendorService.getAllProducts().subscribe(data =>
this.productArray =data  );

}
addQuantity(){
    

}
}
