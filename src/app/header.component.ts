import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag:boolean;
  logged:string;
  user:any;

  constructor(private router:Router) { }

  ngOnInit() {
  var obj=JSON.parse(sessionStorage.getItem("userObj"));
  this.user=obj;
  console.log(obj);

  if(obj===null){
    this.flag=false;
  }
  else{
    this.flag=true;
    if(obj.userRole=='Buyer'){
      this.logged='buyer';
    }
    else if (obj.userRole == 'Seller'){
      this.logged = 'seller';

    }
    else if (obj.userRole == 'Vendor'){
      this.logged = 'vendor';
    }
  }
  }
  
  logout() {
    this.flag =false;
    this.logged = undefined;
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }

}
