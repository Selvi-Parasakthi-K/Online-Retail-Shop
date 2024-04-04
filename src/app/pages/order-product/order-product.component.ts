
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent {
  orders: any[] = [];
  customerId: string = "3fa85f64-5717-4562-b3fc-2c963f66afa5"; // Adjust customerId if necessary

  constructor(private cartService: CartService, private http: HttpClient, private toastr: ToastrService) {
    this.orders = this.cartService.getCartItems();
  }

  increaseQuantity(order: any) {
    order.Quantity++;
  }

  decreaseQuantity(order: any) {
    if (order.Quantity > 1) {
      order.Quantity--;
    }
  }

  removeFromCart(order: any) {
    this.cartService.removeFromCart(order);
    this.orders = this.cartService.getCartItems();
  }

//   buyNow() {
//     for (let order of this.orders) {
//       const orderData = {
//         customerId: this.customerId,
//         productId: order.id,
//         quantity: order.Quantity
//       };
// debugger;
//       this.http.post('https://localhost:44308/api/Order/CreateOrder', orderData)
//         .subscribe((response: any) => {
//           console.log(response);
//           if (response) {
//             alert('Order placed successfully');
//             this.cartService.clearCart();
//             this.orders = [];
//           } else {
//             alert('Error placing order: ' + response.error);
//           }
//         }, error => {
//           console.error('Error placing order:', error);
//           alert('Error placing order: ' + error.message);
//         });
//     }
//   }


buyNow() {
  for (let order of this.orders) {
    const orderData = {
      customerId: this.customerId,
      productId: order.id,
      quantity: order.Quantity
    };

    if (orderData.quantity > order.quantity) {
      alert(`${order.ProductName}: Quantity exceeds available stock (${order.quantity}). Please adjust.`);
      return;
    }

    this.http.post('https://localhost:44308/api/Order/CreateOrder', orderData)
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.toastr.success("Order placed successfully");
          this.cartService.clearCart();
          this.orders = [];
        } else {
          alert('Error placing order: ' + response.error);
        }
      }, error => {
        console.error('Error placing order:', error);
        alert('Error placing order: ' + error.message);
      });
  }
}

}
