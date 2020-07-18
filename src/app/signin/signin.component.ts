import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

import { UserModel } from '../signup/signup.model';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  title:String = "Login";
  constructor(private userService: UserService,private router:Router){}

  // productItem = new Usermodel(null,null,null,null,null,null,null,null);
  // product: Product = { prod_id: '', prod_name: '', prod_code: '', release_code: '', prod_desc: '', prod_price: null, starrating: null, image: null };

  // user:UserModel = {};

  ngOnInit(){
    
  }
  Login(){
    // this.userService.login(this.user);
    // console.log("Called");
    // alert("Success");
    // this.router.navigate(['/']);
  }

}
