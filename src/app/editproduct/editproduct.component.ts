import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
// import { NgModule }      from '@angular/core';

// import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { FormGroup , FormBuilder , ReactiveFormsModule , FormsModule } from '@angular/forms';




@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})

// @NgModule({
//   imports: [
//       // BrowserModule /* or CommonModule */, 
     
//   ]
//   // ...
// })

// @NgModule({
//   imports: [
    
//     FormsModule,
//     ReactiveFormsModule
//   ]
// })
export class EditproductComponent implements OnInit {
  title: String = "Edit Product";
  // id: String;
  productForm: FormGroup;
_id:string;
productId:number;
productName:string;
productCode:string;
releaseDate:string;
description:string;
price:number;
starRating:number;
imageUrl:string;

  
  product: ProductModel = {_id:'',productId: null, productName: '', productCode: '', releaseDate: '', description: '', price: null, starRating: null, imageUrl: null };
  // isLoadingResults = true;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private formBuilder: FormBuilder) { }
  




  ngOnInit(): void {

    // this.sub = this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
  
      // this.getProductDetails(this.route.snapshot.params['id']);
      console.log(this.route.snapshot.params['id']);
      this.getProductDetails(this.route.snapshot.params['id']);
      this.productForm = this.formBuilder.group({
        'productId' :null,
        'productName' : null,
        'productCode' : null,
        'releaseDate' : null,
        'description' : null,
        'price' : null,
        'starRating' : null,
        'imageUrl' :null,

      });


  }


getProductDetails(id) {
  // this.id = id;
  // console.log("this.test4:id:"+this.id);
  this.productService.getProduct(id)
    .subscribe(data => {
      this.product = JSON.parse(JSON.stringify(data));
      console.log("data :"+this.product);

      this._id = this.product._id;
    this.productForm.setValue({
      productId: this.product.productId,
      productName: this.product.productName,
      productCode: this.product.productCode,
      releaseDate:this.product.releaseDate,
      description:this.product.description,
      price:this.product.price,
      starRating:this.product.starRating,
      imageUrl:this.product.imageUrl


    });
    this.router.navigate(['/edit']);  

      
    });
  }
    

  EditProduct(product,id) {
    console.log("edit :"+product.productName,"id :"+id);
    // this.product = product;
    // this.id = id;
    this.productService.editProduct(product,id);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/']);
  }
}




