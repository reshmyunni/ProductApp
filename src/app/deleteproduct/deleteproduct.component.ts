import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { FormGroup , FormBuilder , ReactiveFormsModule , FormsModule } from '@angular/forms';


@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  title: String = "Delete Product";
  product: ProductModel = {_id:'',productId: null, productName: '', productCode: '', releaseDate: '', description: '', price: null, starRating: null, imageUrl: null };


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('delete id :'+this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['id']);
      this.getProductDetails(this.route.snapshot.params['id']);
  }

getProductDetails(id) {
  // this.id = id;
  // console.log("this.test4:id:"+this.id);
  this.productService.getProduct(id)
    .subscribe(data => {
      this.product = JSON.parse(JSON.stringify(data));
      console.log("data :"+this.product);

      
    this.router.navigate(['/delete']);  

      
    });
  }
    

  DeleteProduct(id) {
    console.log("delete 123 :id :"+id);
    // this.product = product;
    // this.id = id;
    this.productService.deleteProduct(id);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/']);
  }
}





