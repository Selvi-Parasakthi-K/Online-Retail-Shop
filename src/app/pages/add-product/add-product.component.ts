import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Product {
  ProductName: string;
  Quantity: number;
  IsActive: boolean;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: string = '';
  quantity: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const isActive: boolean = this.quantity > 0;

    const newProduct: Product = {
      ProductName: this.productName,
      Quantity: this.quantity,
      IsActive: isActive
    };

    this.http.post('https://localhost:44308/api/Product/CreateProduct', newProduct)
      .subscribe((response: any) => {
        console.log('Product added successfully:', response);
        this.router.navigate(['/show-product']);
      }, (error: any) => {
        console.error('Error adding product:', error);
      });
  }
}
