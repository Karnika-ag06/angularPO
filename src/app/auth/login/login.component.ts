import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logValue:boolean=false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

get email(){
  return this.loginForm.get("userEmail");
}


get password(){
  return this.loginForm.get("userPass");
}


  loginForm=new FormGroup({
    userEmail:new FormControl('',Validators.required),
    userPass:new FormControl('',Validators.required)
  });

  onSubmitValidate(){
    console.log(this.loginForm.value.userEmail,this.loginForm.value.userPass);
    this.authService.validateUser(this.loginForm.value.userEmail,this.loginForm.value.userPass).subscribe(
  data=>{
let uObj=data;
console.log(data);
console.log(uObj);
sessionStorage.setItem("userObj",JSON.stringify(uObj));

    alert(uObj.userRole);
    if(uObj.userRole == 'Seller'){
      this.router.navigate(['./']);
    }
    else if(uObj.userRole == 'Buyer'){
      this.router.navigate(['./buyerPage']);
    }
    else if(uObj.userRole == 'Vendor'){
      this.router.navigate(['./vendorPage']);
    }
    else{
      alert("invalid!");
      this.router.navigate(['./']);
    }
  },
  error=>{
    alert("Email and password is incorrect");
  });
}
}
