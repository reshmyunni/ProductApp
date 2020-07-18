import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  title: String = 'Product List';
  products: ProductModel[];
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage:boolean = false;
  buttonType:String;
  id:String;
  // product: Product = { prod_id: '', prod_name: '', prod_code: '', release_code: '', prod_desc: '', prod_price: null, starrating: null, image: null };
  // isLoadingResults = true;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  onSubmit(buttonType,id): void {
    if(buttonType==="Edit") {
        this.id = id;
        // this.getProductDetails(id);
        this.router.navigate(['/edit']);  
       
    }
    if(buttonType==="Delete"){
        console.log("Delete"+id);
        this.deleteProduct(id);
    }

}


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
    })
    
  }

  deleteProduct(id) {
    // this.isLoadingResults = true;
    this.productService.deleteProduct(id)
      .subscribe(res => {
          // this.isLoadingResults = false;
          this.router.navigate(['/products']);
        }, (err) => {
          console.log(err);
          // this.isLoadingResults = false;
        }
      );
  }

}
