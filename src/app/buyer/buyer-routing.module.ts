import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaisePOComponent } from './raise-po/raise-po.component';
import { BuyerComponent } from './buyer.component';
import { ViewallComponent } from './viewall.component';


const routes: Routes = [
  // {path: '', component:BuyerComponent},

  {path:'raisepo',component:RaisePOComponent},
  {path:'viewAll',component:ViewallComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
