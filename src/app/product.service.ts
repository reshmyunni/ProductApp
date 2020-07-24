import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  getProduct(id){
    console.log("id :"+id);
   
    return this.http.get("http://localhost:3000/product/"+id);
  }

  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  editProduct(item,id){
    return this.http.post("http://localhost:3000/edit/"+id,{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  deleteProduct(id){
    console.log('delete product + id:'+id);
    return this.http.post("http://localhost:3000/delete/"+id,{}).subscribe(data=>{console.log(data)})
  }
}
