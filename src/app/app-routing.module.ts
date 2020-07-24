import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'
import { NewProductComponent } from './new-product/new-product.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

const routes : Routes = [
  {path:'',component:ProductListComponent},
  {path:'add',component:NewProductComponent},
  {path: 'edit/:id',component: EditproductComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'signup',component: SignupComponent},
  {path:'delete/:id',component:DeleteproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
