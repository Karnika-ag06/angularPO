import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaisePOComponent } from './raise-po/raise-po.component';
import { BuyerComponent } from './buyer.component';


const routes: Routes = [
  // {path: '', component:BuyerComponent},

  {path:'raisepo',component:RaisePOComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
