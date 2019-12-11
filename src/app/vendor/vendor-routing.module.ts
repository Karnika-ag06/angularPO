import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { ViewallproductsComponent } from './viewallproducts.component';
import { AddquantityComponent } from './addquantity.component';


const routes: Routes = [
  {path:'vendorPage',component:VendorComponent},
  {path:'viewProducts',component:ViewallproductsComponent},
  {path:'addQuantity',component:AddquantityComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
