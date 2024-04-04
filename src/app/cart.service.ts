import { Injectable } from '@angular/core';
import { RootInterface } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   cartItems: any[] = [];

  constructor() {}

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  existingproduct(item: any): boolean {
    return this.cartItems.some(cartItem => cartItem.id === item.id );
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.Id === item.Id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
