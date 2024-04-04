import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ShowProductComponent } from '../../pages/show-product/show-product.component';
import { AddProductComponent } from '../../pages/add-product/add-product.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'show-product', component: ShowProductComponent},
  {path: 'add-product', component: AddProductComponent},
];
@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css',

})

export class CategoryNavbarComponent {

}
