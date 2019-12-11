import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BannerComponent } from './banner.component';
import { VendorComponent } from './vendor/vendor.component';
// import { RaisePOComponent } from './buyer/raise-po/raise-po.component';



const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'buyerPage',loadChildren: './buyer/buyer.module#BuyerModule'},
    {path:'vendorPage',loadChildren: './vendor/vendor.module#VendorModule'}
    
    // {path:'raisepo',component:RaisePOComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
