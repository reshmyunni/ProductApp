import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  newUser(user){
    return this.http.post("http://localhost:3000/insertnewuser",{"user":user})
    .subscribe(data=>{console.log(data)})  
  }

  login(user){
    return this.http.post("http://localhost:3000/login",{"user":user})
    .subscribe(data=>{console.log(data)})  
  }
  
}
