import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';
import { HttpParams } from "@angular/common/http";



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/v1/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  getProduct(id){
    console.log("id :"+id);
    let httpParams = new HttpParams().set('id', id);

    return this.http.get("http://localhost:3000/product",{params:httpParams});
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

  editProduct(item){
    return this.http.post("http://localhost:3000/edit",{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  deleteProduct(id){
    return this.http.get("http://localhost:3000/delete",{params:{'id':id}});
  }
}
