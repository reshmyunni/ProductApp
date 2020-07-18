import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';



@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  title: String = "Edit Product";
  id: Number;
  
  product: Product = { prod_id: '', prod_name: '', prod_code: '', release_code: '', prod_desc: '', prod_price: null, starrating: null, image: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  




  ngOnInit(): void {

    // this.sub = this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
  
      // this.getProductDetails(this.route.snapshot.params['id']);
      this.getProductDetails(this.route.snapshot.params['id']);


  }


getProductDetails(id) {
  this.productService.getProduct(id)
    .subscribe(data => {
      this.product = JSON.parse(JSON.stringify(data));
      console.log(this.product);
      this.isLoadingResults = false;
      this.router.navigate(['/edit']);  
    });
}

  EditProduct() {
    // this.productService.editProduct(this.productItem);
    // console.log("Called");
    // alert("Success");
    // this.router.navigate(['/']);
  }
}




