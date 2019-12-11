import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-viewallproducts',
  templateUrl: './viewallproducts.component.html',
  styleUrls: ['./viewallproducts.component.css']
})
export class ViewallproductsComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  public productArray:Product[];

  ngOnInit() {
    this.vendorService.getAllProducts().subscribe(data=>
      this.productArray=data);
  }

}
