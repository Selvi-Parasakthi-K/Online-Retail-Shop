import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';
import { OrderProductComponent } from './pages/order-product/order-product.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'show-product', component: ShowProductComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'order-product', component: OrderProductComponent},

  {path: 'about-us', component:AboutUsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
