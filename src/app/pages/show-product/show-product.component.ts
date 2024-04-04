import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootInterface } from '../../app.interface';
import { CartService } from '../../cart.service';
import { NgToastService } from 'ng-angular-popup'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  products: RootInterface[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient, private router: Router, private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<RootInterface[]>('https://localhost:44308/api/Product/GetAllProduct')
      .subscribe((products: RootInterface[]) => {
        console.log(products);
        this.products = products;
      });
  }

  trackById(index: number, item: RootInterface) {
    return item.Id;
  }

  addToCart(product: RootInterface) {

    debugger;   

    if (this.cartService.existingproduct(product)) {
      alert('Product is already added to the cart');
      return;
    } else {
      this.cartService.addToCart({ ...product, Quantity: 1 });
      this.toastr.success("Product added successfully");
      this.router.navigate(['/order-product']);
    }
  }

}











