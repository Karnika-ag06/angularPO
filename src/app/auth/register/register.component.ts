import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:AuthService,private router:Router) { }

  ngOnInit() {
    console.log(this.RegisterForm);
  }

  get username(){
    return this.RegisterForm.get("userName");
  }
  
  get useraddress(){
    return this.RegisterForm.get("userAddress");
  }
  get usermobile(){
    return this.RegisterForm.get("userMobile");
  }
  
  get useremail(){
    return this.RegisterForm.get("userEmail");
  }
  
  get password(){
    return this.RegisterForm.get("userPassword");
  }
  
  
    RegisterForm=new FormGroup({
      userName:new FormControl('',Validators.required),
      userAddress:new FormControl('',Validators.required),
      userMobile:new FormControl('',Validators.required),
      userEmail:new FormControl('',Validators.required),
      userPassword:new FormControl('',Validators.required)
    });

    onSubmit(){
      console.log(this.RegisterForm.value);
      this.userService.addUser(this.RegisterForm.value).subscribe(
      data=>{
        console.log("Post request is successful",data);
      },
      error => {
        console.log("Error",error);
      }
      );
this.router.navigate(['login']);
    }
  }