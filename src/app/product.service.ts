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
    // let httpParams = new HttpParams().set('id', id);

    // return this.http.get("http://localhost:3000/product",{params:httpParams});

    return this.http.get("http://localhost:3000/product/"+id);
  }


  // getProduct(id): Observable<Product> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<Product>(url).pipe(
  //     tap(_ => console.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<Product>(`getProduct id=${id}`))
  //   );
  // }

  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  editProduct(item,id){
    return this.http.post("http://localhost:3000/edit/"+id,{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  deleteProduct(id){
    return this.http.get("http://localhost:3000/delete",{params:{'id':id}});
  }
}
