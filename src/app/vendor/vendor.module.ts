import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { ViewallproductsComponent } from './viewallproducts.component';
import { AddquantityComponent } from './addquantity.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorService } from './vendor.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VendorComponent, ViewallproductsComponent, AddquantityComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    HttpClientModule,FormsModule
  ],
  exports:[
    VendorComponent,ViewallproductsComponent,AddquantityComponent
  ],
  providers:[VendorService]
})
export class VendorModule { }
