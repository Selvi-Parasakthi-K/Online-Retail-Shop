import { Component } from '@angular/core';
import { RootInterface } from '../../app.interface';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-top-selling-product',
  templateUrl: './top-selling-product.component.html',
  styleUrl: './top-selling-product.component.css'
})
export class TopSellingProductComponent {
  product: RootInterface = {
    Id:"",
    productName:"",
    quantity:0,
    isActive:false
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<RootInterface>('https://localhost:44308/api/Order/GetMostSoldProduct')
      .subscribe((products: RootInterface) => {
        console.log(products);
        this.product = products;
      });
  }
}
