import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

import { UserModel } from '../signup/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title:String = "Signup";
  constructor(private userService: UserService,private router:Router){}

  newUser = new UserModel(null,null,null,null,null,null);

  ngOnInit(){
    
  }
  AddUser(){
    this.userService.newUser(this.newUser);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/signin']);
  }

}


