import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-raise-po',
  templateUrl: './raise-po.component.html',
  styleUrls: ['./raise-po.component.css']
})
export class RaisePOComponent implements OnInit {

  constructor(private buyerService:BuyerService) { }
public productArray:any;
  ngOnInit() {

    this.buyerService.getAllProducts().subscribe(data=>
      this.productArray=data
      );
  }

}
